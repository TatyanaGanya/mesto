export class UserInfo {
    constructor(infoConfig) {
        this._profileName = document.querySelector(infoConfig.profileNameSelector);
        this._profileJob = document.querySelector(infoConfig.profileJobSelector);
        this._profileAvatar = document.querySelector(
            infoConfig.profileAvatarSelector)
        
    }
//возвращаем обьект 
    getUserInfo() {
        return {
            profile_name: this._profileName.textContent, 
            profile_job: this._profileJob.textContent
        }
    }

// добавляет на страницу
    setUserInfo({profile_name, profile_job, profile_avatar}) {
        this._profileName.textContent = profile_name;
        this._profileJob.textContent = profile_job;
        this._profileAvatar.src = profile_avatar;
    }
}