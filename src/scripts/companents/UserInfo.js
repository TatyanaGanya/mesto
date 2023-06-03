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
            name: this._profileName.textContent, 
            about: this._profileJob.textContent
        }
    }

    getUserInfoId() {
        return this._id;
    }
    
// добавляет на страницу
    setUserInfo( { name, about, avatar,userId } ) {
        this._profileName.textContent = name; 
        this._profileJob.textContent = about; 
        this._profileAvatar.src = avatar; 
        this._id = userId; //id 
    }
}