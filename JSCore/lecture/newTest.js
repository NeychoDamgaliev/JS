let data = [
    {"latitude":42.64708,"longitude":23.27319,"tasks":[
        {"id":1,"number":5415,"description":"Тежки консултации","status":"Cancelled","route":"Z:\\_____DIAM_WORK\\Sofia\\17.Vitosha\\kv.Boyana\\kv.50\\UPI XXIII-183 (68134.1942.1334)"},
        {"id":2,"number":5415,"description":"Тежки консултации","status":"Finished","route":"Z:\\_____DIAM_WORK\\Sofia\\17.Vitosha\\kv.Boyana\\kv.50\\UPI XXIII-183 (68134.1942.1334)"},
        {"id":3,"number":5415,"description":"Тежки консултации","status":"Finished","route":"Z:\\_____DIAM_WORK\\Sofia\\17.Vitosha\\kv.Boyana\\kv.50\\UPI XXIII-183 (68134.1942.1334)"},
        {"id":4,"number":5415,"description":"Тежки консултации","status":"Running","route":"Z:\\_____DIAM_WORK\\Sofia\\17.Vitosha\\kv.Boyana\\kv.50\\UPI XXIII-183 (68134.1942.1334)"},
        {"id":5,"number":5415,"description":"Тежки консултации","status":"Running","route":"Z:\\_____DIAM_WORK\\Sofia\\17.Vitosha\\kv.Boyana\\kv.50\\UPI XXIII-183 (68134.1942.1334)"}]
    },
    {"latitude":42.64708,"longitude":23.27319,"tasks":[
        {"id":6,"number":5415,"description":"Тежки консултации","status":"Cancelled","route":"Z:\\_____DIAM_WORK\\Sofia\\17.Vitosha\\kv.Boyana\\kv.50\\UPI XXIII-183 (68134.1942.1334)"},
        {"id":7,"number":5415,"description":"Тежки консултации","status":"Cancelled","route":"Z:\\_____DIAM_WORK\\Sofia\\17.Vitosha\\kv.Boyana\\kv.50\\UPI XXIII-183 (68134.1942.1334)"},
        {"id":8,"number":5415,"description":"Тежки консултации","status":"Cancelled","route":"Z:\\_____DIAM_WORK\\Sofia\\17.Vitosha\\kv.Boyana\\kv.50\\UPI XXIII-183 (68134.1942.1334)"},
        {"id":9,"number":5415,"description":"Тежки консултации","status":"Running","route":"Z:\\_____DIAM_WORK\\Sofia\\17.Vitosha\\kv.Boyana\\kv.50\\UPI XXIII-183 (68134.1942.1334)"},
        {"id":10,"number":5415,"description":"Тежки консултации","status":"Running","route":"Z:\\_____DIAM_WORK\\Sofia\\17.Vitosha\\kv.Boyana\\kv.50\\UPI XXIII-183 (68134.1942.1334)"}]
    },
    {"latitude":42.64708,"longitude":23.27319,"tasks":[
        {"id":11,"number":5415,"description":"Тежки консултации","status":"Running","route":"Z:\\_____DIAM_WORK\\Sofia\\17.Vitosha\\kv.Boyana\\kv.50\\UPI XXIII-183 (68134.1942.1334)"},
        {"id":12,"number":5415,"description":"Тежки консултации","status":"Running","route":"Z:\\_____DIAM_WORK\\Sofia\\17.Vitosha\\kv.Boyana\\kv.50\\UPI XXIII-183 (68134.1942.1334)"},
        {"id":13,"number":5415,"description":"Тежки консултации","status":"Running","route":"Z:\\_____DIAM_WORK\\Sofia\\17.Vitosha\\kv.Boyana\\kv.50\\UPI XXIII-183 (68134.1942.1334)"},
        {"id":14,"number":5415,"description":"Тежки консултации","status":"Running","route":"Z:\\_____DIAM_WORK\\Sofia\\17.Vitosha\\kv.Boyana\\kv.50\\UPI XXIII-183 (68134.1942.1334)"},
        {"id":15,"number":5415,"description":"Тежки консултации","status":"Running","route":"Z:\\_____DIAM_WORK\\Sofia\\17.Vitosha\\kv.Boyana\\kv.50\\UPI XXIII-183 (68134.1942.1334)"}]
    }];
    
let res = data.filter(function(el) {
    let taskList = el.tasks.filter(function(task){
        console.log(task.status);
		return task.status == 'Finished';
    });
    
    if(taskList.length != 0) {
        el.tasks = taskList;
        return true;
    } else {
        return false;
    }
});

debugger;