import { importClass, JavaClass, BasicOrJavaType } from "java-bridge";
import { Boolean as java_lang_Boolean } from "./../../lang/Boolean";
import { Long as java_lang_Long } from "./../../lang/Long";
import { TimeUnit as java_util_concurrent_TimeUnit } from "./TimeUnit";

/**
 * This class just defines types, you should import Future instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class FutureClass extends JavaClass {
    // ================== Method isCancelled ==================
    /**
     * @return original return type: 'boolean'
     */
    public isCancelled(): Promise<boolean>;
    // ================== Method isCancelled ==================
    /**
     * @return original return type: 'boolean'
     */
    public isCancelledSync(): boolean;
    // ================== Method isDone ==================
    /**
     * @return original return type: 'boolean'
     */
    public isDone(): Promise<boolean>;
    // ================== Method isDone ==================
    /**
     * @return original return type: 'boolean'
     */
    public isDoneSync(): boolean;
    // ================== Method cancel ==================
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'boolean'
     */
    public cancel(var0: java_lang_Boolean | boolean): Promise<boolean>;
    // ================== Method cancel ==================
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'boolean'
     */
    public cancelSync(var0: java_lang_Boolean | boolean): boolean;
    // ================== Method get ==================
    /**
     * @return original return type: 'java.lang.Object'
     */
    public get(): Promise<BasicOrJavaType | null>;
    // ================== Method get ==================
    /**
     * @return original return type: 'java.lang.Object'
     */
    public getSync(): BasicOrJavaType | null;
    /**
     * @param var0 original type: 'long'
     * @param var1 original type: 'java.util.concurrent.TimeUnit'
     * @return original return type: 'java.lang.Object'
     */
    public get(var0: java_lang_Long | bigint | number, var1: java_util_concurrent_TimeUnit | null): Promise<BasicOrJavaType | null>;
    /**
     * @param var0 original type: 'long'
     * @param var1 original type: 'java.util.concurrent.TimeUnit'
     * @return original return type: 'java.lang.Object'
     */
    public getSync(var0: java_lang_Long | bigint | number, var1: java_util_concurrent_TimeUnit | null): BasicOrJavaType | null;
}

/**
 * Class java.util.concurrent.Future.
 *
 * This actually imports the java class for further use.
 * The class FutureClass only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export class Future extends importClass<typeof FutureClass>("java.util.concurrent.Future") {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor() {
        super();
    }
}
export default Future;