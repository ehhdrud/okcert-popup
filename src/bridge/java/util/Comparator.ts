import { importClass, JavaClass, BasicOrJavaType } from "java-bridge";
import { Function as java_util_function_Function } from "./function/Function";
import { ToIntFunction as java_util_function_ToIntFunction } from "./function/ToIntFunction";
import { ToLongFunction as java_util_function_ToLongFunction } from "./function/ToLongFunction";
import { ToDoubleFunction as java_util_function_ToDoubleFunction } from "./function/ToDoubleFunction";

/**
 * This class just defines types, you should import Comparator instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class ComparatorClass extends JavaClass {
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
    // ================== Method compare ==================
    /**
     * @param var0 original type: 'java.lang.Object'
     * @param var1 original type: 'java.lang.Object'
     * @return original return type: 'int'
     */
    public compare(var0: BasicOrJavaType | null, var1: BasicOrJavaType | null): Promise<number>;
    // ================== Method compare ==================
    /**
     * @param var0 original type: 'java.lang.Object'
     * @param var1 original type: 'java.lang.Object'
     * @return original return type: 'int'
     */
    public compareSync(var0: BasicOrJavaType | null, var1: BasicOrJavaType | null): number;
    // ================== Method reversed ==================
    /**
     * @return original return type: 'java.util.Comparator'
     */
    public reversed(): Promise<Comparator | null>;
    // ================== Method reversed ==================
    /**
     * @return original return type: 'java.util.Comparator'
     */
    public reversedSync(): Comparator | null;
    // ================== Method thenComparing ==================
    /**
     * @param var0 original type: 'java.util.function.Function'
     * @return original return type: 'java.util.Comparator'
     */
    public thenComparing(var0: java_util_function_Function | null): Promise<Comparator | null>;
    // ================== Method thenComparing ==================
    /**
     * @param var0 original type: 'java.util.function.Function'
     * @return original return type: 'java.util.Comparator'
     */
    public thenComparingSync(var0: java_util_function_Function | null): Comparator | null;
    /**
     * @param var0 original type: 'java.util.function.Function'
     * @param var1 original type: 'java.util.Comparator'
     * @return original return type: 'java.util.Comparator'
     */
    public thenComparing(var0: java_util_function_Function | null, var1: ComparatorClass | null): Promise<Comparator | null>;
    /**
     * @param var0 original type: 'java.util.function.Function'
     * @param var1 original type: 'java.util.Comparator'
     * @return original return type: 'java.util.Comparator'
     */
    public thenComparingSync(var0: java_util_function_Function | null, var1: ComparatorClass | null): Comparator | null;
    /**
     * @param var0 original type: 'java.util.Comparator'
     * @return original return type: 'java.util.Comparator'
     */
    public thenComparing(var0: ComparatorClass | null): Promise<Comparator | null>;
    /**
     * @param var0 original type: 'java.util.Comparator'
     * @return original return type: 'java.util.Comparator'
     */
    public thenComparingSync(var0: ComparatorClass | null): Comparator | null;
    // ================== Method thenComparingInt ==================
    /**
     * @param var0 original type: 'java.util.function.ToIntFunction'
     * @return original return type: 'java.util.Comparator'
     */
    public thenComparingInt(var0: java_util_function_ToIntFunction | null): Promise<Comparator | null>;
    // ================== Method thenComparingInt ==================
    /**
     * @param var0 original type: 'java.util.function.ToIntFunction'
     * @return original return type: 'java.util.Comparator'
     */
    public thenComparingIntSync(var0: java_util_function_ToIntFunction | null): Comparator | null;
    // ================== Method thenComparingLong ==================
    /**
     * @param var0 original type: 'java.util.function.ToLongFunction'
     * @return original return type: 'java.util.Comparator'
     */
    public thenComparingLong(var0: java_util_function_ToLongFunction | null): Promise<Comparator | null>;
    // ================== Method thenComparingLong ==================
    /**
     * @param var0 original type: 'java.util.function.ToLongFunction'
     * @return original return type: 'java.util.Comparator'
     */
    public thenComparingLongSync(var0: java_util_function_ToLongFunction | null): Comparator | null;
    // ================== Method thenComparingDouble ==================
    /**
     * @param var0 original type: 'java.util.function.ToDoubleFunction'
     * @return original return type: 'java.util.Comparator'
     */
    public thenComparingDouble(var0: java_util_function_ToDoubleFunction | null): Promise<Comparator | null>;
    // ================== Method thenComparingDouble ==================
    /**
     * @param var0 original type: 'java.util.function.ToDoubleFunction'
     * @return original return type: 'java.util.Comparator'
     */
    public thenComparingDoubleSync(var0: java_util_function_ToDoubleFunction | null): Comparator | null;
    // ================== Method reverseOrder ==================
    /**
     * @return original return type: 'java.util.Comparator'
     */
    public static reverseOrder(): Promise<Comparator | null>;
    // ================== Method reverseOrder ==================
    /**
     * @return original return type: 'java.util.Comparator'
     */
    public static reverseOrderSync(): Comparator | null;
    // ================== Method naturalOrder ==================
    /**
     * @return original return type: 'java.util.Comparator'
     */
    public static naturalOrder(): Promise<Comparator | null>;
    // ================== Method naturalOrder ==================
    /**
     * @return original return type: 'java.util.Comparator'
     */
    public static naturalOrderSync(): Comparator | null;
    // ================== Method nullsFirst ==================
    /**
     * @param var0 original type: 'java.util.Comparator'
     * @return original return type: 'java.util.Comparator'
     */
    public static nullsFirst(var0: ComparatorClass | null): Promise<Comparator | null>;
    // ================== Method nullsFirst ==================
    /**
     * @param var0 original type: 'java.util.Comparator'
     * @return original return type: 'java.util.Comparator'
     */
    public static nullsFirstSync(var0: ComparatorClass | null): Comparator | null;
    // ================== Method nullsLast ==================
    /**
     * @param var0 original type: 'java.util.Comparator'
     * @return original return type: 'java.util.Comparator'
     */
    public static nullsLast(var0: ComparatorClass | null): Promise<Comparator | null>;
    // ================== Method nullsLast ==================
    /**
     * @param var0 original type: 'java.util.Comparator'
     * @return original return type: 'java.util.Comparator'
     */
    public static nullsLastSync(var0: ComparatorClass | null): Comparator | null;
    // ================== Method comparing ==================
    /**
     * @param var0 original type: 'java.util.function.Function'
     * @param var1 original type: 'java.util.Comparator'
     * @return original return type: 'java.util.Comparator'
     */
    public static comparing(var0: java_util_function_Function | null, var1: ComparatorClass | null): Promise<Comparator | null>;
    // ================== Method comparing ==================
    /**
     * @param var0 original type: 'java.util.function.Function'
     * @param var1 original type: 'java.util.Comparator'
     * @return original return type: 'java.util.Comparator'
     */
    public static comparingSync(var0: java_util_function_Function | null, var1: ComparatorClass | null): Comparator | null;
    /**
     * @param var0 original type: 'java.util.function.Function'
     * @return original return type: 'java.util.Comparator'
     */
    public static comparing(var0: java_util_function_Function | null): Promise<Comparator | null>;
    /**
     * @param var0 original type: 'java.util.function.Function'
     * @return original return type: 'java.util.Comparator'
     */
    public static comparingSync(var0: java_util_function_Function | null): Comparator | null;
    // ================== Method comparingInt ==================
    /**
     * @param var0 original type: 'java.util.function.ToIntFunction'
     * @return original return type: 'java.util.Comparator'
     */
    public static comparingInt(var0: java_util_function_ToIntFunction | null): Promise<Comparator | null>;
    // ================== Method comparingInt ==================
    /**
     * @param var0 original type: 'java.util.function.ToIntFunction'
     * @return original return type: 'java.util.Comparator'
     */
    public static comparingIntSync(var0: java_util_function_ToIntFunction | null): Comparator | null;
    // ================== Method comparingLong ==================
    /**
     * @param var0 original type: 'java.util.function.ToLongFunction'
     * @return original return type: 'java.util.Comparator'
     */
    public static comparingLong(var0: java_util_function_ToLongFunction | null): Promise<Comparator | null>;
    // ================== Method comparingLong ==================
    /**
     * @param var0 original type: 'java.util.function.ToLongFunction'
     * @return original return type: 'java.util.Comparator'
     */
    public static comparingLongSync(var0: java_util_function_ToLongFunction | null): Comparator | null;
    // ================== Method comparingDouble ==================
    /**
     * @param var0 original type: 'java.util.function.ToDoubleFunction'
     * @return original return type: 'java.util.Comparator'
     */
    public static comparingDouble(var0: java_util_function_ToDoubleFunction | null): Promise<Comparator | null>;
    // ================== Method comparingDouble ==================
    /**
     * @param var0 original type: 'java.util.function.ToDoubleFunction'
     * @return original return type: 'java.util.Comparator'
     */
    public static comparingDoubleSync(var0: java_util_function_ToDoubleFunction | null): Comparator | null;
}

/**
 * Class java.util.Comparator.
 *
 * This actually imports the java class for further use.
 * The class ComparatorClass only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export class Comparator extends importClass<typeof ComparatorClass>("java.util.Comparator") {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor() {
        super();
    }
}
export default Comparator;