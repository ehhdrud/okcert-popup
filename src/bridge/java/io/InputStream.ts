import { importClass, JavaClass, BasicOrJavaType } from "java-bridge";
import { Integer as java_lang_Integer } from "./../lang/Integer";
import { Long as java_lang_Long } from "./../lang/Long";
import { Class as java_lang_Class } from "./../lang/Class";

/**
 * This class just defines types, you should import InputStream instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class InputStreamClass extends JavaClass {
    // ================== Method read ==================
    /**
     * @param var0 original type: 'byte[]'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @return original return type: 'int'
     */
    public read(var0: Buffer | null, var1: java_lang_Integer | number, var2: java_lang_Integer | number): Promise<number>;
    // ================== Method read ==================
    /**
     * @param var0 original type: 'byte[]'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @return original return type: 'int'
     */
    public readSync(var0: Buffer | null, var1: java_lang_Integer | number, var2: java_lang_Integer | number): number;
    /**
     * @param var0 original type: 'byte[]'
     * @return original return type: 'int'
     */
    public read(var0: Buffer | null): Promise<number>;
    /**
     * @param var0 original type: 'byte[]'
     * @return original return type: 'int'
     */
    public readSync(var0: Buffer | null): number;
    /**
     * @return original return type: 'int'
     */
    public read(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    public readSync(): number;
    // ================== Method close ==================
    /**
     * @return original return type: 'void'
     */
    public close(): Promise<void>;
    // ================== Method close ==================
    /**
     * @return original return type: 'void'
     */
    public closeSync(): void;
    // ================== Method mark ==================
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'void'
     */
    public mark(var0: java_lang_Integer | number): Promise<void>;
    // ================== Method mark ==================
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'void'
     */
    public markSync(var0: java_lang_Integer | number): void;
    // ================== Method skip ==================
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'long'
     */
    public skip(var0: java_lang_Long | bigint | number): Promise<number>;
    // ================== Method skip ==================
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'long'
     */
    public skipSync(var0: java_lang_Long | bigint | number): number;
    // ================== Method available ==================
    /**
     * @return original return type: 'int'
     */
    public available(): Promise<number>;
    // ================== Method available ==================
    /**
     * @return original return type: 'int'
     */
    public availableSync(): number;
    // ================== Method markSupported ==================
    /**
     * @return original return type: 'boolean'
     */
    public markSupported(): Promise<boolean>;
    // ================== Method markSupported ==================
    /**
     * @return original return type: 'boolean'
     */
    public markSupportedSync(): boolean;
    // ================== Method reset ==================
    /**
     * @return original return type: 'void'
     */
    public reset(): Promise<void>;
    // ================== Method reset ==================
    /**
     * @return original return type: 'void'
     */
    public resetSync(): void;
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
}

/**
 * Class java.io.InputStream.
 *
 * This actually imports the java class for further use.
 * The class InputStreamClass only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export class InputStream extends importClass<typeof InputStreamClass>("java.io.InputStream") {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor() {
        super();
    }
}
export default InputStream;