import { importClass, JavaClass, BasicOrJavaType } from "java-bridge";
import { Thread as java_lang_Thread } from "./Thread";
import { Throwable as java_lang_Throwable } from "./Throwable";
import { Boolean as java_lang_Boolean } from "./Boolean";
import { Integer as java_lang_Integer } from "./Integer";
import { Long as java_lang_Long } from "./Long";
import { Class as java_lang_Class } from "./Class";

/**
 * This class just defines types, you should import ThreadGroup instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class ThreadGroupClass extends JavaClass {
    // ================== Method uncaughtException ==================
    /**
     * @param var0 original type: 'java.lang.Thread'
     * @param var1 original type: 'java.lang.Throwable'
     * @return original return type: 'void'
     */
    public uncaughtException(var0: java_lang_Thread | null, var1: java_lang_Throwable | null): Promise<void>;
    // ================== Method uncaughtException ==================
    /**
     * @param var0 original type: 'java.lang.Thread'
     * @param var1 original type: 'java.lang.Throwable'
     * @return original return type: 'void'
     */
    public uncaughtExceptionSync(var0: java_lang_Thread | null, var1: java_lang_Throwable | null): void;
    // ================== Method toString ==================
    /**
     * @return original return type: 'java.lang.String'
     */
    public toString(): Promise<string>;
    // ================== Method toString ==================
    /**
     * @return original return type: 'java.lang.String'
     */
    public toStringSync(): string;
    // ================== Method getName ==================
    /**
     * @return original return type: 'java.lang.String'
     */
    public getName(): Promise<string | null>;
    // ================== Method getName ==================
    /**
     * @return original return type: 'java.lang.String'
     */
    public getNameSync(): string | null;
    // ================== Method getParent ==================
    /**
     * @return original return type: 'java.lang.ThreadGroup'
     */
    public getParent(): Promise<ThreadGroup | null>;
    // ================== Method getParent ==================
    /**
     * @return original return type: 'java.lang.ThreadGroup'
     */
    public getParentSync(): ThreadGroup | null;
    // ================== Method checkAccess ==================
    /**
     * @return original return type: 'void'
     */
    public checkAccess(): Promise<void>;
    // ================== Method checkAccess ==================
    /**
     * @return original return type: 'void'
     */
    public checkAccessSync(): void;
    // ================== Method setDaemon ==================
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'void'
     */
    public setDaemon(var0: java_lang_Boolean | boolean): Promise<void>;
    // ================== Method setDaemon ==================
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'void'
     */
    public setDaemonSync(var0: java_lang_Boolean | boolean): void;
    // ================== Method stop ==================
    /**
     * @return original return type: 'void'
     */
    public stop(): Promise<void>;
    // ================== Method stop ==================
    /**
     * @return original return type: 'void'
     */
    public stopSync(): void;
    // ================== Method interrupt ==================
    /**
     * @return original return type: 'void'
     */
    public interrupt(): Promise<void>;
    // ================== Method interrupt ==================
    /**
     * @return original return type: 'void'
     */
    public interruptSync(): void;
    // ================== Method destroy ==================
    /**
     * @return original return type: 'void'
     */
    public destroy(): Promise<void>;
    // ================== Method destroy ==================
    /**
     * @return original return type: 'void'
     */
    public destroySync(): void;
    // ================== Method suspend ==================
    /**
     * @return original return type: 'void'
     */
    public suspend(): Promise<void>;
    // ================== Method suspend ==================
    /**
     * @return original return type: 'void'
     */
    public suspendSync(): void;
    // ================== Method resume ==================
    /**
     * @return original return type: 'void'
     */
    public resume(): Promise<void>;
    // ================== Method resume ==================
    /**
     * @return original return type: 'void'
     */
    public resumeSync(): void;
    // ================== Method activeCount ==================
    /**
     * @return original return type: 'int'
     */
    public activeCount(): Promise<number>;
    // ================== Method activeCount ==================
    /**
     * @return original return type: 'int'
     */
    public activeCountSync(): number;
    // ================== Method enumerate ==================
    /**
     * @param var0 original type: 'java.lang.ThreadGroup[]'
     * @param var1 original type: 'boolean'
     * @return original return type: 'int'
     */
    public enumerate(var0: (ThreadGroupClass | null)[] | null, var1: java_lang_Boolean | boolean): Promise<number>;
    // ================== Method enumerate ==================
    /**
     * @param var0 original type: 'java.lang.ThreadGroup[]'
     * @param var1 original type: 'boolean'
     * @return original return type: 'int'
     */
    public enumerateSync(var0: (ThreadGroupClass | null)[] | null, var1: java_lang_Boolean | boolean): number;
    /**
     * @param var0 original type: 'java.lang.Thread[]'
     * @param var1 original type: 'boolean'
     * @return original return type: 'int'
     */
    public enumerate(var0: (java_lang_Thread | null)[] | null, var1: java_lang_Boolean | boolean): Promise<number>;
    /**
     * @param var0 original type: 'java.lang.Thread[]'
     * @param var1 original type: 'boolean'
     * @return original return type: 'int'
     */
    public enumerateSync(var0: (java_lang_Thread | null)[] | null, var1: java_lang_Boolean | boolean): number;
    /**
     * @param var0 original type: 'java.lang.Thread[]'
     * @return original return type: 'int'
     */
    public enumerate(var0: (java_lang_Thread | null)[] | null): Promise<number>;
    /**
     * @param var0 original type: 'java.lang.Thread[]'
     * @return original return type: 'int'
     */
    public enumerateSync(var0: (java_lang_Thread | null)[] | null): number;
    /**
     * @param var0 original type: 'java.lang.ThreadGroup[]'
     * @return original return type: 'int'
     */
    public enumerate(var0: (ThreadGroupClass | null)[] | null): Promise<number>;
    /**
     * @param var0 original type: 'java.lang.ThreadGroup[]'
     * @return original return type: 'int'
     */
    public enumerateSync(var0: (ThreadGroupClass | null)[] | null): number;
    // ================== Method isDaemon ==================
    /**
     * @return original return type: 'boolean'
     */
    public isDaemon(): Promise<boolean>;
    // ================== Method isDaemon ==================
    /**
     * @return original return type: 'boolean'
     */
    public isDaemonSync(): boolean;
    // ================== Method getMaxPriority ==================
    /**
     * @return original return type: 'int'
     */
    public getMaxPriority(): Promise<number>;
    // ================== Method getMaxPriority ==================
    /**
     * @return original return type: 'int'
     */
    public getMaxPrioritySync(): number;
    // ================== Method isDestroyed ==================
    /**
     * @return original return type: 'boolean'
     */
    public isDestroyed(): Promise<boolean>;
    // ================== Method isDestroyed ==================
    /**
     * @return original return type: 'boolean'
     */
    public isDestroyedSync(): boolean;
    // ================== Method setMaxPriority ==================
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'void'
     */
    public setMaxPriority(var0: java_lang_Integer | number): Promise<void>;
    // ================== Method setMaxPriority ==================
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'void'
     */
    public setMaxPrioritySync(var0: java_lang_Integer | number): void;
    // ================== Method parentOf ==================
    /**
     * @param var0 original type: 'java.lang.ThreadGroup'
     * @return original return type: 'boolean'
     */
    public parentOf(var0: ThreadGroupClass | null): Promise<boolean>;
    // ================== Method parentOf ==================
    /**
     * @param var0 original type: 'java.lang.ThreadGroup'
     * @return original return type: 'boolean'
     */
    public parentOfSync(var0: ThreadGroupClass | null): boolean;
    // ================== Method activeGroupCount ==================
    /**
     * @return original return type: 'int'
     */
    public activeGroupCount(): Promise<number>;
    // ================== Method activeGroupCount ==================
    /**
     * @return original return type: 'int'
     */
    public activeGroupCountSync(): number;
    // ================== Method list ==================
    /**
     * @return original return type: 'void'
     */
    public list(): Promise<void>;
    // ================== Method list ==================
    /**
     * @return original return type: 'void'
     */
    public listSync(): void;
    // ================== Method allowThreadSuspension ==================
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'boolean'
     */
    public allowThreadSuspension(var0: java_lang_Boolean | boolean): Promise<boolean>;
    // ================== Method allowThreadSuspension ==================
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'boolean'
     */
    public allowThreadSuspensionSync(var0: java_lang_Boolean | boolean): boolean;
    // ================== Method wait ==================
    /**
     * @param var0 original type: 'long'
     * @param var1 original type: 'int'
     * @return original return type: 'void'
     */
    public wait(var0: java_lang_Long | bigint | number, var1: java_lang_Integer | number): Promise<void>;
    // ================== Method wait ==================
    /**
     * @param var0 original type: 'long'
     * @param var1 original type: 'int'
     * @return original return type: 'void'
     */
    public waitSync(var0: java_lang_Long | bigint | number, var1: java_lang_Integer | number): void;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'void'
     */
    public wait(var0: java_lang_Long | bigint | number): Promise<void>;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'void'
     */
    public waitSync(var0: java_lang_Long | bigint | number): void;
    /**
     * @return original return type: 'void'
     */
    public wait(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    public waitSync(): void;
    // ================== Method equals ==================
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'boolean'
     */
    public equals(var0: BasicOrJavaType | null): Promise<boolean>;
    // ================== Method equals ==================
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'boolean'
     */
    public equalsSync(var0: BasicOrJavaType | null): boolean;
    // ================== Method hashCode ==================
    /**
     * @return original return type: 'int'
     */
    public hashCode(): Promise<number>;
    // ================== Method hashCode ==================
    /**
     * @return original return type: 'int'
     */
    public hashCodeSync(): number;
    // ================== Method getClass ==================
    /**
     * @return original return type: 'java.lang.Class'
     */
    public getClass(): Promise<java_lang_Class>;
    // ================== Method getClass ==================
    /**
     * @return original return type: 'java.lang.Class'
     */
    public getClassSync(): java_lang_Class;
    // ================== Method notify ==================
    /**
     * @return original return type: 'void'
     */
    public notify(): Promise<void>;
    // ================== Method notify ==================
    /**
     * @return original return type: 'void'
     */
    public notifySync(): void;
    // ================== Method notifyAll ==================
    /**
     * @return original return type: 'void'
     */
    public notifyAll(): Promise<void>;
    // ================== Method notifyAll ==================
    /**
     * @return original return type: 'void'
     */
    public notifyAllSync(): void;
    // ================== Method newInstance ==================
    /**
     * @param var0 original type: 'java.lang.ThreadGroup'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'java.lang.ThreadGroup'
     */
    public static newInstance(var0: ThreadGroupClass | null, var1: string | null): Promise<ThreadGroup>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.ThreadGroup'
     */
    public static newInstance(var0: string | null): Promise<ThreadGroup>;
    // ================== Constructors ==================
    /**
     * @param var0 original type: 'java.lang.ThreadGroup'
     * @param var1 original type: 'java.lang.String'
     */
    public constructor(var0: ThreadGroupClass | null, var1: string | null);
    /**
     * @param var0 original type: 'java.lang.String'
     */
    public constructor(var0: string | null);
}

/**
 * Class java.lang.ThreadGroup.
 *
 * This actually imports the java class for further use.
 * The class ThreadGroupClass only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export class ThreadGroup extends importClass<typeof ThreadGroupClass>("java.lang.ThreadGroup") {
}
export default ThreadGroup;