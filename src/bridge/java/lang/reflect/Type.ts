import { importClass, JavaClass } from "java-bridge";

/**
 * This class just defines types, you should import Type instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class TypeClass extends JavaClass {
    // ================== Method getTypeName ==================
    /**
     * @return original return type: 'java.lang.String'
     */
    public getTypeName(): Promise<string | null>;
    // ================== Method getTypeName ==================
    /**
     * @return original return type: 'java.lang.String'
     */
    public getTypeNameSync(): string | null;
}

/**
 * Class java.lang.reflect.Type.
 *
 * This actually imports the java class for further use.
 * The class TypeClass only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export class Type extends importClass<typeof TypeClass>("java.lang.reflect.Type") {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor() {
        super();
    }
}
export default Type;