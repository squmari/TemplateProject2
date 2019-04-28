var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var SaveData = (function () {
    function SaveData() {
    }
    SaveData.getAccountName = function () {
        //固有アカウント名 = ゲーム名 + 登録日
        SaveData.account = Util.loadStringLocalStrage("account");
        if (SaveData.account == null) {
            console.log("アカウントがありません");
            SaveData.registrate();
        }
    };
    SaveData.setObject = function () {
        SaveData.object = {
            "gameName": SaveData.gameName,
            "account": SaveData.account,
            "registrationDate": CheckDate.registrationDate,
            "lastDate": CheckDate.lastDate,
            "bestScore": Score.bestScore
        };
    };
    SaveData.registrate = function () {
        console.log("新規登録");
        CheckDate.getDate();
        SaveData.setObject();
        SaveData.account = SaveData.gameName + CheckDate.registrationDate;
        SaveData.object.account = SaveData.account;
        Util.saveStringLocalStrage("account", SaveData.account);
        SaveData.save();
    };
    SaveData.save = function () {
        Util.saveJSONLocalStrage(SaveData.account, SaveData.object);
        SaveData.test();
    };
    SaveData.load = function () {
        SaveData.object = Util.loadJSONLocalStrage(SaveData.account);
        SaveData.test();
    };
    SaveData.deleteData = function () {
        SaveData.object = null;
        CheckDate.registrationDate = null;
        Util.clearLocalStrage(SaveData.account);
        SaveData.registrate();
        SaveData.load();
    };
    SaveData.test = function () {
        console.log(SaveData.object);
    };
    SaveData.gameName = "TemplateProject2";
    SaveData.account = null;
    return SaveData;
}());
__reflect(SaveData.prototype, "SaveData");
//# sourceMappingURL=SaveData.js.map