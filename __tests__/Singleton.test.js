// import all Singleton classes/instances
import LoggerUtility_NotSingleton from '../Creational_Design_Patterns/Singleton/InitialClass_NotSingleton';
import singleton1 from '../Creational_Design_Patterns/Singleton/Singleton';
import singleton2 from '../Creational_Design_Patterns/Singleton/Singleton2';

test('not_singleton should create unique instances', () => {
    const notSingleton1 = new LoggerUtility_NotSingleton();
    const notSingleton2 = new LoggerUtility_NotSingleton();

    expect(notSingleton1 === notSingleton2).toBe(false);
})

test('singleton1 should not be able to instantiate, should throw error', () => {
    expect(() => {
        const singleton1Instance = new singleton1();
    }).toThrow();

    try{
        var x = new singleton1()
        }
    catch(err){
        expect(err.message).toEqual('_Singleton.default is not a constructor');
    } 
})

test('singleton2 should instantiate same instance each time', () => {
    const singleton2a = new singleton2();
    const singleton2b = new singleton2();
    const singleton2c = new singleton2();
    const singleton2d = new singleton2();

    expect(
            (singleton2a === singleton2b) &&
            (singleton2c === singleton2b) &&
            (singleton2d === singleton2c)
    ).toBe(true)
})