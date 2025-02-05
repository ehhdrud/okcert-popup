import { importClass, JavaClass, BasicOrJavaType } from "java-bridge";
import { Class as java_lang_Class } from "./../Class";

/**
 * This class just defines types, you should import Annotation instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class AnnotationClass extends JavaClass {
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
    // ================== Method annotationType ==================
    /**
     * @return original return type: 'java.lang.Class'
     */
    public annotationType(): Promise<java_lang_Class | null>;
    // ================== Method annotationType ==================
    /**
     * @return original return type: 'java.lang.Class'
     */
    public annotationTypeSync(): java_lang_Class | null;
}

/**
 * Class java.lang.annotation.Annotation.
 *
 * This actually imports the java class for further use.
 * The class AnnotationClass only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export class Annotation extends importClass<typeof AnnotationClass>("java.lang.annotation.Annotation") {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor() {
        super();
    }
}
export default Annotation;