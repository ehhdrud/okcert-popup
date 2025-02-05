import { importClass, JavaClass } from "java-bridge";
import { Double as java_lang_Double } from "./../../lang/Double";

/**
 * This class just defines types, you should import DoubleToIntFunction instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class DoubleToIntFunctionClass extends JavaClass {
    // ================== Method applyAsInt ==================
    /**
     * @param var0 original type: 'double'
     * @return original return type: 'int'
     */
    public applyAsInt(var0: java_lang_Double | number): Promise<number>;
    // ================== Method applyAsInt ==================
    /**
     * @param var0 original type: 'double'
     * @return original return type: 'int'
     */
    public applyAsIntSync(var0: java_lang_Double | number): number;
}

/**
 * Class java.util.function.DoubleToIntFunction.
 *
 * This actually imports the java class for further use.
 * The class DoubleToIntFunctionClass only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export class DoubleToIntFunction extends importClass<typeof DoubleToIntFunctionClass>("java.util.function.DoubleToIntFunction") {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor() {
        super();
    }
}
export default DoubleToIntFunction;