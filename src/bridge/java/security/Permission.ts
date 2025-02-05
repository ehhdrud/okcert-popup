import { importClass, JavaClass, BasicOrJavaType } from "java-bridge";
import { PermissionCollection as java_security_PermissionCollection } from "./PermissionCollection";
import { Long as java_lang_Long } from "./../lang/Long";
import { Integer as java_lang_Integer } from "./../lang/Integer";
import { Class as java_lang_Class } from "./../lang/Class";

/**
 * This class just defines types, you should import Permission instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class PermissionClass extends JavaClass {
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
    // ================== Method implies ==================
    /**
     * @param var0 original type: 'java.security.Permission'
     * @return original return type: 'boolean'
     */
    public implies(var0: PermissionClass | null): Promise<boolean>;
    // ================== Method implies ==================
    /**
     * @param var0 original type: 'java.security.Permission'
     * @return original return type: 'boolean'
     */
    public impliesSync(var0: PermissionClass | null): boolean;
    // ================== Method getActions ==================
    /**
     * @return original return type: 'java.lang.String'
     */
    public getActions(): Promise<string | null>;
    // ================== Method getActions ==================
    /**
     * @return original return type: 'java.lang.String'
     */
    public getActionsSync(): string | null;
    // ================== Method newPermissionCollection ==================
    /**
     * @return original return type: 'java.security.PermissionCollection'
     */
    public newPermissionCollection(): Promise<java_security_PermissionCollection | null>;
    // ================== Method newPermissionCollection ==================
    /**
     * @return original return type: 'java.security.PermissionCollection'
     */
    public newPermissionCollectionSync(): java_security_PermissionCollection | null;
    // ================== Method checkGuard ==================
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'void'
     */
    public checkGuard(var0: BasicOrJavaType | null): Promise<void>;
    // ================== Method checkGuard ==================
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'void'
     */
    public checkGuardSync(var0: BasicOrJavaType | null): void;
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
 * Class java.security.Permission.
 *
 * This actually imports the java class for further use.
 * The class PermissionClass only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export class Permission extends importClass<typeof PermissionClass>("java.security.Permission") {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor() {
        super();
    }
}
export default Permission;