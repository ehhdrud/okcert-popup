import { importClass, JavaClass } from "java-bridge";

/**
 * This class just defines types, you should import DoubleSupplier instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class DoubleSupplierClass extends JavaClass {
    // ================== Method getAsDouble ==================
    /**
     * @return original return type: 'double'
     */
    public getAsDouble(): Promise<number>;
    // ================== Method getAsDouble ==================
    /**
     * @return original return type: 'double'
     */
    public getAsDoubleSync(): number;
}

/**
 * Class java.util.function.DoubleSupplier.
 *
 * This actually imports the java class for further use.
 * The class DoubleSupplierClass only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export class DoubleSupplier extends importClass<typeof DoubleSupplierClass>("java.util.function.DoubleSupplier") {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor() {
        super();
    }
}
export default DoubleSupplier;