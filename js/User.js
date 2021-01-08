class User {
    static isLoggedIn = () => User.get('accessKey') != null;

    static set = (key, value) => localStorage.setItem(key, value);

    static get = (key) => User.getLocalStorage(key);

    static getLocalStorage = (key) => {
        const ret = localStorage.getItem(key);
        if (ret) {
            return ret;
        }
        return null;
    };

    static getAccessKey = () => {
        let accessKey = User.get('accessKey');
        if (typeof accessKey === 'string') {
            return parseInt(accessKey);
        }
        return undefined;
    }

    static login = async (account, password) => {
        // ログイン処理
        // ログインエラー時には、falseを返してもいいし、returnを別の用途で利用したかったら
        // 例外を出しして呼び出し元でcatchしてもいいかと思います。
        let accessKey = getDatabase().login(account, password);
        localStorage.setItem('accessKey', accessKey);

        return accessKey;
    };

    static logout = async () => {
        if (User.isLoggedIn()) {
            localStorage.removeItem('accessKey');

        // ログアウト処理
        //　他に必要な処理があるのならこちら
        }
    };
}

export default User;