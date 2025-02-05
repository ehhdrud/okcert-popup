import { importClass, JavaClass, BasicOrJavaType } from "java-bridge";
import { IntConsumer as java_util_function_IntConsumer } from "./function/IntConsumer";
import { Integer as java_lang_Integer } from "./../lang/Integer";
import { IntSupplier as java_util_function_IntSupplier } from "./function/IntSupplier";
import { Supplier as java_util_function_Supplier } from "./function/Supplier";
import { Long as java_lang_Long } from "./../lang/Long";
import { Class as java_lang_Class } from "./../lang/Class";

/**
 * This class just defines types, you should import OptionalInt instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class OptionalIntClass extends JavaClass {
    // ================== Method isPresent ==================
    /**
     * @return original return type: 'boolean'
     */
    public isPresent(): Promise<boolean>;
    // ================== Method isPresent ==================
    /**
     * @return original return type: 'boolean'
     */
    public isPresentSync(): boolean;
    // ================== Method ifPresent ==================
    /**
     * @param var0 original type: 'java.util.function.IntConsumer'
     * @return original return type: 'void'
     */
    public ifPresent(var0: java_util_function_IntConsumer | null): Promise<void>;
    // ================== Method ifPresent ==================
    /**
     * @param var0 original type: 'java.util.function.IntConsumer'
     * @return original return type: 'void'
     */
    public ifPresentSync(var0: java_util_function_IntConsumer | null): void;
    // ================== Method orElse ==================
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'int'
     */
    public orElse(var0: java_lang_Integer | number): Promise<number>;
    // ================== Method orElse ==================
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'int'
     */
    public orElseSync(var0: java_lang_Integer | number): number;
    // ================== Method orElseGet ==================
    /**
     * @param var0 original type: 'java.util.function.IntSupplier'
     * @return original return type: 'int'
     */
    public orElseGet(var0: java_util_function_IntSupplier | null): Promise<number>;
    // ================== Method orElseGet ==================
    /**
     * @param var0 original type: 'java.util.function.IntSupplier'
     * @return original return type: 'int'
     */
    public orElseGetSync(var0: java_util_function_IntSupplier | null): number;
    // ================== Method orElseThrow ==================
    /**
     * @param var0 original type: 'java.util.function.Supplier'
     * @return original return type: 'int'
     */
    public orElseThrow(var0: java_util_function_Supplier | null): Promise<number>;
    // ================== Method orElseThrow ==================
    /**
     * @param var0 original type: 'java.util.function.Supplier'
     * @return original return type: 'int'
     */
    public orElseThrowSync(var0: java_util_function_Supplier | null): number;
    // ================== Method getAsInt ==================
    /**
     * @return original return type: 'int'
     */
    public getAsInt(): Promise<number>;
    // ================== Method getAsInt ==================
    /**
     * @return original return type: 'int'
     */
    public getAsIntSync(): number;
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
    // ================== Method of ==================
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'java.util.OptionalInt'
     */
    public static of(var0: java_lang_Integer | number): Promise<OptionalInt | null>;
    // ================== Method of ==================
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'java.util.OptionalInt'
     */
    public static ofSync(var0: java_lang_Integer | number): OptionalInt | null;
    // ================== Method empty ==================
    /**
     * @return original return type: 'java.util.OptionalInt'
     */
    public static empty(): Promise<OptionalInt | null>;
    // ================== Method empty ==================
    /**
     * @return original return type: 'java.util.OptionalInt'
     */
    public static emptySync(): OptionalInt | null;
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
 * Class java.util.OptionalInt.
 *
 * This actually imports the java class for further use.
 * The class OptionalIntClass only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export class OptionalInt extends importClass<typeof OptionalIntClass>("java.util.OptionalInt") {
}
export default OptionalInt;