import { importClass, JavaClass, BasicOrJavaType } from "java-bridge";
import { PasswordAuthentication as java_net_PasswordAuthentication } from "./PasswordAuthentication";
import { InetAddress as java_net_InetAddress } from "./InetAddress";
import { Integer as java_lang_Integer } from "./../lang/Integer";
import { URL as java_net_URL } from "./URL";
import { Authenticator$RequestorType as java_net_Authenticator$RequestorType } from "./Authenticator$RequestorType";
import { Long as java_lang_Long } from "./../lang/Long";
import { Class as java_lang_Class } from "./../lang/Class";

/**
 * This class just defines types, you should import Authenticator instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class AuthenticatorClass extends JavaClass {
    // ================== Method requestPasswordAuthentication ==================
    /**
     * @param var0 original type: 'java.net.InetAddress'
     * @param var1 original type: 'int'
     * @param var2 original type: 'java.lang.String'
     * @param var3 original type: 'java.lang.String'
     * @param var4 original type: 'java.lang.String'
     * @return original return type: 'java.net.PasswordAuthentication'
     */
    public static requestPasswordAuthentication(var0: java_net_InetAddress | null, var1: java_lang_Integer | number, var2: string | null, var3: string | null, var4: string | null): Promise<java_net_PasswordAuthentication | null>;
    // ================== Method requestPasswordAuthentication ==================
    /**
     * @param var0 original type: 'java.net.InetAddress'
     * @param var1 original type: 'int'
     * @param var2 original type: 'java.lang.String'
     * @param var3 original type: 'java.lang.String'
     * @param var4 original type: 'java.lang.String'
     * @return original return type: 'java.net.PasswordAuthentication'
     */
    public static requestPasswordAuthenticationSync(var0: java_net_InetAddress | null, var1: java_lang_Integer | number, var2: string | null, var3: string | null, var4: string | null): java_net_PasswordAuthentication | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.net.InetAddress'
     * @param var2 original type: 'int'
     * @param var3 original type: 'java.lang.String'
     * @param var4 original type: 'java.lang.String'
     * @param var5 original type: 'java.lang.String'
     * @return original return type: 'java.net.PasswordAuthentication'
     */
    public static requestPasswordAuthentication(var0: string | null, var1: java_net_InetAddress | null, var2: java_lang_Integer | number, var3: string | null, var4: string | null, var5: string | null): Promise<java_net_PasswordAuthentication | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.net.InetAddress'
     * @param var2 original type: 'int'
     * @param var3 original type: 'java.lang.String'
     * @param var4 original type: 'java.lang.String'
     * @param var5 original type: 'java.lang.String'
     * @return original return type: 'java.net.PasswordAuthentication'
     */
    public static requestPasswordAuthenticationSync(var0: string | null, var1: java_net_InetAddress | null, var2: java_lang_Integer | number, var3: string | null, var4: string | null, var5: string | null): java_net_PasswordAuthentication | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.net.InetAddress'
     * @param var2 original type: 'int'
     * @param var3 original type: 'java.lang.String'
     * @param var4 original type: 'java.lang.String'
     * @param var5 original type: 'java.lang.String'
     * @param var6 original type: 'java.net.URL'
     * @param var7 original type: 'java.net.Authenticator$RequestorType'
     * @return original return type: 'java.net.PasswordAuthentication'
     */
    public static requestPasswordAuthentication(var0: string | null, var1: java_net_InetAddress | null, var2: java_lang_Integer | number, var3: string | null, var4: string | null, var5: string | null, var6: java_net_URL | null, var7: java_net_Authenticator$RequestorType | null): Promise<java_net_PasswordAuthentication | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.net.InetAddress'
     * @param var2 original type: 'int'
     * @param var3 original type: 'java.lang.String'
     * @param var4 original type: 'java.lang.String'
     * @param var5 original type: 'java.lang.String'
     * @param var6 original type: 'java.net.URL'
     * @param var7 original type: 'java.net.Authenticator$RequestorType'
     * @return original return type: 'java.net.PasswordAuthentication'
     */
    public static requestPasswordAuthenticationSync(var0: string | null, var1: java_net_InetAddress | null, var2: java_lang_Integer | number, var3: string | null, var4: string | null, var5: string | null, var6: java_net_URL | null, var7: java_net_Authenticator$RequestorType | null): java_net_PasswordAuthentication | null;
    // ================== Method setDefault ==================
    /**
     * @param var0 original type: 'java.net.Authenticator'
     * @return original return type: 'void'
     */
    public static setDefault(var0: AuthenticatorClass | null): Promise<void>;
    // ================== Method setDefault ==================
    /**
     * @param var0 original type: 'java.net.Authenticator'
     * @return original return type: 'void'
     */
    public static setDefaultSync(var0: AuthenticatorClass | null): void;
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
 * Class java.net.Authenticator.
 *
 * This actually imports the java class for further use.
 * The class AuthenticatorClass only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export class Authenticator extends importClass<typeof AuthenticatorClass>("java.net.Authenticator") {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor() {
        super();
    }
}
export default Authenticator;