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
            profileName: this._profileName.textContent, 
            profileJob: this._profileJob.textContent
        }
    }

    getUserInfoId() {
        return this._id;
    }
    
// добавляет на страницу
    setUserInfo({profileName, profileJob, profileAvatar, userId}) {
        this._profileName.textContent = profileName;
        this._profileJob.textContent = profileJob;
        this._profileAvatar.src = profileAvatar;
        this._id = userId; //id
    }
}