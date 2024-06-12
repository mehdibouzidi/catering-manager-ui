export class UtilStatic{
    static readonly ADD = 'add';
    static readonly UPDATE = 'update';
    static readonly DELETE= 'delete';
    static readonly FIND_ALL = 'findAll';
    static readonly FIND_ALL_BY_CRITERIA = 'findAllByCriteria';
    static readonly SLASH = '/';

    static readonly TOKEN = 'token';
    static readonly USERNAME = 'username';
    
    static isMobile(){
        if (window.screen.width <= 770) { // 768px portrait
            return true;
        }
        return false;
    }

    static refreshApp(){
        window.location.reload();
    }
}