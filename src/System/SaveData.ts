class SaveData{

    static object : any;
    static gameName : string = "TemplateProject2";
    static account : string = null;

    static getAccountName(){
        //固有アカウント名 = ゲーム名 + 登録日
        SaveData.account = Util.loadStringLocalStrage("account");
        if(SaveData.account == null){
            console.log("アカウントがありません");
            SaveData.registrate();
        }
    }

    static setObject(){
        SaveData.object = {
            "gameName"              : SaveData.gameName,
            "account"               : SaveData.account,
            "registrationDate"      : CheckDate.registrationDate, 
            "lastDate"              : CheckDate.lastDate, 
            "bestScore"             : Score.bestScore
        };

    }

    static registrate(){
        console.log("新規登録");
        CheckDate.getDate();
        SaveData.setObject();
        SaveData.account = SaveData.gameName + CheckDate.registrationDate;
        SaveData.object.account = SaveData.account;
        Util.saveStringLocalStrage("account", SaveData.account)
        SaveData.save();
    }

    static save(){
        Util.saveJSONLocalStrage(SaveData.account, SaveData.object);
        SaveData.test();
    }

    static load(){

        SaveData.object = Util.loadJSONLocalStrage(SaveData.account);
        SaveData.test();
    }

    static deleteData(){
        SaveData.object = null;
        CheckDate.registrationDate = null;
        Util.clearLocalStrage(SaveData.account);
        SaveData.registrate();
        SaveData.load();
    }

    static test(){
        console.log(SaveData.object);
        
    }
}