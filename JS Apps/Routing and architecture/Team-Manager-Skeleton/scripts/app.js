$(() => {
    const app = Sammy('#main', function () {
        // DECLARE USAGE OF HANDLEBARS FOR TEMPLATING ENGINE
        this.use('Handlebars', 'hbs');

        // DECALE ROUTES
        this.get('/index.html', displayHome);
        this.get('/home', displayHome);
        this.get('/about', displayAbout);
        this.post('/login', postLogin);
        this.get('/login', displayLogin);
        this.post('/register', postRegister);
        this.get('/register', displayRegister);
        this.get('/logout', logout);
        this.get('/catalog', displayCatalog);
        this.get('/create', displayCreate);
        this.post('/create', postCreateTeam);
        this.get('/catalog/:teamId', displayTeamDetails);
        this.get('/join/:id', getJoinTeamById);
        this.get('/leave', getLeaveTeam);
		this.post('#/edit/:id', editTeam);
		this.get('#/edit/:id', viewEditTeam);

		function viewEditTeam(ctx) {
		  initAuthContext(ctx);
		  ctx.teamId = ctx.params.id;
		  teamsService.loadTeamDetails(ctx.teamId)
			.then(([teamInfo, users]) => {
			  ctx.name = teamInfo.name;
			  ctx.comment = teamInfo.comment;
			  ctx.loadPartials({
				header: './templates/common/header.hbs',
				footer: './templates/common/footer.hbs',
				editForm: './templates/edit/editForm.hbs'
			  }).then(function () {
				this.partial('./templates/edit/editPage.hbs');
			  });
			})
			.catch(auth.handleError);
		}
	
	   function edinTeam(ctx) {
            let teamId = ctx.params.id.substr(1);
            teamsService.loadTeamDetails(teamId)
            .then(function (teamInfo) {
                ctx.teamId = teamId;
                ctx.name = teamInfo.name;
                ctx.comment = teamInfo.comment;

                partialsLoader(ctx,{editForm: './templates/edit/editForm.hbs'})
                .then( function () {
                    this.partial('./templates/edit/editPage.hbs');
                });

            }).catch(handleError);
        }


        function getLeaveTeam(ctx) {
            
            teamsService.leaveTeam()
            .then(function (userInfo) {
                
                auth.saveSession(userInfo);
                auth.showInfo('TEAM LEFT');
                displayCatalog(ctx);
            }).catch(handleError);
        };

        function getJoinTeamById(ctx) {
            // debugger;
            let teamId = ctx.params.id.substr(1);

            teamsService.joinTeam(teamId)
            .then(function (userInfo) {
                // debugger;
                auth.saveSession(userInfo);
                auth.showInfo("Team joined");
                displayCatalog(ctx);
            }).catch(handleError);
        };


        function displayTeamDetails(ctx) {
            // debugger;
            let teamId = ctx.params.teamId.substr(1);
            teamsService.loadTeamDetails(teamId)
            .then(function (teamInfo) {
                // debugger;
                ctx.teamId = teamId;
                ctx.comment = teamInfo.comment;
                ctx.isOnTeam = teamInfo._id === sessionStorage.getItem('teamId');
                ctx.name = teamInfo.name;
                ctx.isAuthor = teamInfo._acl.creator === sessionStorage.getItem('userId');    
                partialsLoader(ctx, {teamControls:'./templates/catalog/teamControls.hbs'})
                .then(function () {
                    this.partial('./templates/catalog/details.hbs');
                })          
            })
        };
    
        function postCreateTeam(ctx) {
            let teamComment = ctx.params.comment;
            let teamName = ctx.params.name;

            teamsService.createTeam(teamName, teamComment)
            .then( function (teamInfo) {
                teamsService.joinTeam(teamInfo._id)
                .then(function (userInfo) {
                    auth.saveSession(userInfo);
                    auth.showInfo("Team created!");
                    displayCatalog(ctx);
                }).catch(auth.handleError);
            }).catch(auth.handleError);
        }

        function displayCreate(ctx) {
            partialsLoader(ctx,{createForm:'./templates/create/createForm.hbs'})
            .then(function() {
                this.partial('./templates/create/createPage.hbs');
            })
        }

        function displayCatalog(ctx) {
            let addPartials = {
                team: './templates/catalog/team.hbs'
            };
            partialsLoader(ctx, addPartials)
                .then(function () {
                    teamsService.loadTeams().then((response) => {
                        ctx.teams = response;
                        ctx.hasNoTeam = sessionStorage.getItem('teamId') === null || sessionStorage.getItem('teamId') === "undefined";

                        this.partial('./templates/catalog/teamCatalog.hbs');
                    }).catch(auth.handleError);
                });
        };

        function logout(ctx) {
            auth.logout()
                .then(function () {
                    sessionStorage.clear();
                    auth.showInfo('Logged out!');
                    displayHome(ctx);
                    // window.location.replace('#/home');
                });
        };

        function postLogin(ctx) {
            let username = ctx.params.username;
            let password = ctx.params.password;

            auth.login(username, password)
                .then(function (response) {
                    auth.saveSession(response);
                    auth.showInfo("Sucessfully logged In!");
                    displayHome(ctx);
                })
                .catch(auth.handleError);
        }
        function postRegister(ctx) {
            let username = ctx.params.username;
            let password = ctx.params.password;
            let repPassword = ctx.params.repeatPassword;

            if (password !== repPassword) {
                auth.showError("The provided passwords, did not match!");
            } else {
                auth.register(username, password)
                    .then(function (response) {
                        auth.saveSession(response);
                        auth.showInfo("Sucessfull registration!");
                        displayHome(ctx);
                    })
                    .catch(auth.handleError);
            }
        };
        function displayAbout(ctx) {
            partialsLoader(ctx)
                .then(function () {
                    this.partial('./templates/about/about.hbs');
                }).catch(auth.handleError);
        };
        function displayRegister(ctx) {
            let additionalPartials = {
                registerForm: './templates/register/registerForm.hbs'
            }
            partialsLoader(ctx, additionalPartials)
                .then(function () {
                    this.partial('./templates/register/registerPage.hbs')
                }).catch(auth.handleError(this));
        };
        function displayLogin(ctx) {
            let additionalPartials = {
                loginForm: './templates/login/loginForm.hbs'
            }
            partialsLoader(ctx, additionalPartials).then(function () {
                this.partial('./templates/login/loginPage.hbs')
            }).catch(auth.handleError(this));
        };

        function displayHome(ctx) {
            partialsLoader(ctx).then(function () {
                this.partial('./templates/home/home.hbs')
            }).catch(auth.handleError(this));
        };

        let partialsLoader = function (ctx, additionalPartials) {
            ctx.loggedIn = sessionStorage.getItem('authtoken') !== null;
            ctx.username = sessionStorage.getItem('username');
            ctx.teamId = sessionStorage.getItem('teamId') !== null &&
                sessionStorage.getItem('teamId') !== undefined;
            ctx.teamId = sessionStorage.getItem('teamId');
            ctx.hasNoTeam = !!ctx.teamId;

            let partials = {
                header: '../templates/common/header.hbs',
                footer: '../templates/common/footer.hbs',
            };

            for (let part in additionalPartials) {
                partials[part] = additionalPartials[part];
            }

            return ctx.loadPartials(partials);

        };

    });
    app.run();
});