export class UserInfo {
    constructor(infoConfig) {
        this._profileName = document.querySelector(infoConfig.profileNameSelector);
        this._profileJob = document.querySelector(infoConfig.profileJobSelector);
    }
//возвращаем обьект 
    getUserInfo() {
        return {profile_name: this._profileName.textContent, profile_job: this._profileJob.textContent}
    }

// добавляет на страницу
    setUserInfo(data) {
        this._profileName.textContent = data.profile_name;
        this._profileJob.textContent = data.profile_job;
    }
}