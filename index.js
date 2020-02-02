// import all Singleton classes/instances
import LoggerUtility_NotSingleton from './Singleton/InitialClass_NotSingleton';
import singleton1 from './Singleton/Singleton';
import singleton2 from './Singleton/Singleton2';

/* 

    Make all Singleton class examples global and executable
    from the browser console.

*/

window.singleton1 = singleton1; // This is not an exported class so does not have constructor
window.singleton2 = singleton2;
window.LoggerUtility_NotSingleton = LoggerUtility_NotSingleton;