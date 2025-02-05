import { importClass, JavaClass, BasicOrJavaType } from "java-bridge";
import { Function as java_util_function_Function } from "./Function";

/**
 * This class just defines types, you should import UnaryOperator instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class UnaryOperatorClass extends JavaClass {
    // ================== Method identity ==================
    /**
     * @return original return type: 'java.util.function.UnaryOperator'
     */
    public static identity(): Promise<UnaryOperator | null>;
    // ================== Method identity ==================
    /**
     * @return original return type: 'java.util.function.UnaryOperator'
     */
    public static identitySync(): UnaryOperator | null;
    // ================== Method compose ==================
    /**
     * @param var0 original type: 'java.util.function.Function'
     * @return original return type: 'java.util.function.Function'
     */
    public compose(var0: java_util_function_Function | null): Promise<java_util_function_Function | null>;
    // ================== Method compose ==================
    /**
     * @param var0 original type: 'java.util.function.Function'
     * @return original return type: 'java.util.function.Function'
     */
    public composeSync(var0: java_util_function_Function | null): java_util_function_Function | null;
    // ================== Method andThen ==================
    /**
     * @param var0 original type: 'java.util.function.Function'
     * @return original return type: 'java.util.function.Function'
     */
    public andThen(var0: java_util_function_Function | null): Promise<java_util_function_Function | null>;
    // ================== Method andThen ==================
    /**
     * @param var0 original type: 'java.util.function.Function'
     * @return original return type: 'java.util.function.Function'
     */
    public andThenSync(var0: java_util_function_Function | null): java_util_function_Function | null;
    // ================== Method apply ==================
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'java.lang.Object'
     */
    public apply(var0: BasicOrJavaType | null): Promise<BasicOrJavaType | null>;
    // ================== Method apply ==================
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'java.lang.Object'
     */
    public applySync(var0: BasicOrJavaType | null): BasicOrJavaType | null;
}

/**
 * Class java.util.function.UnaryOperator.
 *
 * This actually imports the java class for further use.
 * The class UnaryOperatorClass only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export class UnaryOperator extends importClass<typeof UnaryOperatorClass>("java.util.function.UnaryOperator") {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor() {
        super();
    }
}
export default UnaryOperator;