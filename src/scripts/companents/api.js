import { data } from "autoprefixer";

export default class Api {
    constructor(options) {
        this._url = options.baseUrl;
        this._headers = options.headers;
        this._authorization = options.headers.authorization;
    }

    _checkResponse(res){
        if (res.ok) {
          return res.json();
        }
        // если ошибка, отклоняем промис
        return Promise.reject(`Ошибка: ${res.status}`)
     }   

//загрузка профиля с сервера
    getInfo() {
        return fetch(`${this._url}/users/me`, {
            headers: {
                authorization: this._authorization
            }
        })
       .then(this._checkResponse)
    }

//загрузка карточки с сервера
    getCards() {
        return fetch(`${this._url}/cards`, {
            headers: {
                authorization: this._authorization
            }
        })
        .then(this._checkResponse)
    }

    
    setUserInfo(data){
        return fetch (`${this._url}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
              name: data.profile_name,
              about: data.profile_job
            })
        })
        .then(this._checkResponse)
    }
//avatar
    setUserAvatar(data){
        return fetch (`${this._url}/users//me/avatar`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
              avatar: data.avatar
            })
        })
        .then(this._checkResponse)
    }
///card
    addCard(data) {
        return fetch(`${this._url}/cards`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                name: data.title,
                link: data.image,
            })
        })
        .then(this._checkResponse)
    }

///like
    addLike(data) {
        return fetch(`${this._url}/cards/${data}/likes`, {
            method: 'PUT',
            headers: {
                authorization: this._authorization
            }
         })
        .then(this._checkResponse)
    }

    deleteLike(data) {
        return fetch(`${this._url}/cards/${data}/likes`, {
            method: 'DELETE',
            headers: {
                authorization: this._authorization
            }
        })
            .then(this._checkResponse)
    }

    deleteCard(data) {
        return fetch(`${this._url}/cards/${data}`, {
            method: 'DELETE',
            headers: {
                authorization: this._authorization
            }
        })
            .then(this._checkResponse)
    } 
}

