import { importClass, JavaClass, BasicOrJavaType } from "java-bridge";
import { InputStream as java_io_InputStream } from "./../io/InputStream";
import { URI as java_net_URI } from "./URI";
import { URLConnection as java_net_URLConnection } from "./URLConnection";
import { Proxy as java_net_Proxy } from "./Proxy";
import { Class as java_lang_Class } from "./../lang/Class";
import { URLStreamHandlerFactory as java_net_URLStreamHandlerFactory } from "./URLStreamHandlerFactory";
import { Long as java_lang_Long } from "./../lang/Long";
import { Integer as java_lang_Integer } from "./../lang/Integer";
import { URLStreamHandler as java_net_URLStreamHandler } from "./URLStreamHandler";

/**
 * This class just defines types, you should import URL instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class URLClass extends JavaClass {
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
    // ================== Method openStream ==================
    /**
     * @return original return type: 'java.io.InputStream'
     */
    public openStream(): Promise<java_io_InputStream | null>;
    // ================== Method openStream ==================
    /**
     * @return original return type: 'java.io.InputStream'
     */
    public openStreamSync(): java_io_InputStream | null;
    // ================== Method getPath ==================
    /**
     * @return original return type: 'java.lang.String'
     */
    public getPath(): Promise<string | null>;
    // ================== Method getPath ==================
    /**
     * @return original return type: 'java.lang.String'
     */
    public getPathSync(): string | null;
    // ================== Method toURI ==================
    /**
     * @return original return type: 'java.net.URI'
     */
    public toURI(): Promise<java_net_URI | null>;
    // ================== Method toURI ==================
    /**
     * @return original return type: 'java.net.URI'
     */
    public toURISync(): java_net_URI | null;
    // ================== Method getAuthority ==================
    /**
     * @return original return type: 'java.lang.String'
     */
    public getAuthority(): Promise<string | null>;
    // ================== Method getAuthority ==================
    /**
     * @return original return type: 'java.lang.String'
     */
    public getAuthoritySync(): string | null;
    // ================== Method getQuery ==================
    /**
     * @return original return type: 'java.lang.String'
     */
    public getQuery(): Promise<string | null>;
    // ================== Method getQuery ==================
    /**
     * @return original return type: 'java.lang.String'
     */
    public getQuerySync(): string | null;
    // ================== Method openConnection ==================
    /**
     * @return original return type: 'java.net.URLConnection'
     */
    public openConnection(): Promise<java_net_URLConnection | null>;
    // ================== Method openConnection ==================
    /**
     * @return original return type: 'java.net.URLConnection'
     */
    public openConnectionSync(): java_net_URLConnection | null;
    /**
     * @param var0 original type: 'java.net.Proxy'
     * @return original return type: 'java.net.URLConnection'
     */
    public openConnection(var0: java_net_Proxy | null): Promise<java_net_URLConnection | null>;
    /**
     * @param var0 original type: 'java.net.Proxy'
     * @return original return type: 'java.net.URLConnection'
     */
    public openConnectionSync(var0: java_net_Proxy | null): java_net_URLConnection | null;
    // ================== Method getProtocol ==================
    /**
     * @return original return type: 'java.lang.String'
     */
    public getProtocol(): Promise<string | null>;
    // ================== Method getProtocol ==================
    /**
     * @return original return type: 'java.lang.String'
     */
    public getProtocolSync(): string | null;
    // ================== Method getFile ==================
    /**
     * @return original return type: 'java.lang.String'
     */
    public getFile(): Promise<string | null>;
    // ================== Method getFile ==================
    /**
     * @return original return type: 'java.lang.String'
     */
    public getFileSync(): string | null;
    // ================== Method getHost ==================
    /**
     * @return original return type: 'java.lang.String'
     */
    public getHost(): Promise<string | null>;
    // ================== Method getHost ==================
    /**
     * @return original return type: 'java.lang.String'
     */
    public getHostSync(): string | null;
    // ================== Method getUserInfo ==================
    /**
     * @return original return type: 'java.lang.String'
     */
    public getUserInfo(): Promise<string | null>;
    // ================== Method getUserInfo ==================
    /**
     * @return original return type: 'java.lang.String'
     */
    public getUserInfoSync(): string | null;
    // ================== Method getPort ==================
    /**
     * @return original return type: 'int'
     */
    public getPort(): Promise<number>;
    // ================== Method getPort ==================
    /**
     * @return original return type: 'int'
     */
    public getPortSync(): number;
    // ================== Method getDefaultPort ==================
    /**
     * @return original return type: 'int'
     */
    public getDefaultPort(): Promise<number>;
    // ================== Method getDefaultPort ==================
    /**
     * @return original return type: 'int'
     */
    public getDefaultPortSync(): number;
    // ================== Method getRef ==================
    /**
     * @return original return type: 'java.lang.String'
     */
    public getRef(): Promise<string | null>;
    // ================== Method getRef ==================
    /**
     * @return original return type: 'java.lang.String'
     */
    public getRefSync(): string | null;
    // ================== Method sameFile ==================
    /**
     * @param var0 original type: 'java.net.URL'
     * @return original return type: 'boolean'
     */
    public sameFile(var0: URLClass | null): Promise<boolean>;
    // ================== Method sameFile ==================
    /**
     * @param var0 original type: 'java.net.URL'
     * @return original return type: 'boolean'
     */
    public sameFileSync(var0: URLClass | null): boolean;
    // ================== Method toExternalForm ==================
    /**
     * @return original return type: 'java.lang.String'
     */
    public toExternalForm(): Promise<string | null>;
    // ================== Method toExternalForm ==================
    /**
     * @return original return type: 'java.lang.String'
     */
    public toExternalFormSync(): string | null;
    // ================== Method getContent ==================
    /**
     * @return original return type: 'java.lang.Object'
     */
    public getContent(): Promise<BasicOrJavaType | null>;
    // ================== Method getContent ==================
    /**
     * @return original return type: 'java.lang.Object'
     */
    public getContentSync(): BasicOrJavaType | null;
    /**
     * @param var0 original type: 'java.lang.Class[]'
     * @return original return type: 'java.lang.Object'
     */
    public getContent(var0: (java_lang_Class | null)[] | null): Promise<BasicOrJavaType | null>;
    /**
     * @param var0 original type: 'java.lang.Class[]'
     * @return original return type: 'java.lang.Object'
     */
    public getContentSync(var0: (java_lang_Class | null)[] | null): BasicOrJavaType | null;
    // ================== Method setURLStreamHandlerFactory ==================
    /**
     * @param var0 original type: 'java.net.URLStreamHandlerFactory'
     * @return original return type: 'void'
     */
    public static setURLStreamHandlerFactory(var0: java_net_URLStreamHandlerFactory | null): Promise<void>;
    // ================== Method setURLStreamHandlerFactory ==================
    /**
     * @param var0 original type: 'java.net.URLStreamHandlerFactory'
     * @return original return type: 'void'
     */
    public static setURLStreamHandlerFactorySync(var0: java_net_URLStreamHandlerFactory | null): void;
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
    // ================== Method newInstance ==================
    /**
     * @param var0 original type: 'java.net.URL'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'java.net.URLStreamHandler'
     * @return original return type: 'java.net.URL'
     */
    public static newInstance(var0: URLClass | null, var1: string | null, var2: java_net_URLStreamHandler | null): Promise<URL>;
    /**
     * @param var0 original type: 'java.net.URL'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'java.net.URL'
     */
    public static newInstance(var0: URLClass | null, var1: string | null): Promise<URL>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.net.URL'
     */
    public static newInstance(var0: string | null): Promise<URL>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'int'
     * @param var3 original type: 'java.lang.String'
     * @return original return type: 'java.net.URL'
     */
    public static newInstance(var0: string | null, var1: string | null, var2: java_lang_Integer | number, var3: string | null): Promise<URL>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'java.lang.String'
     * @return original return type: 'java.net.URL'
     */
    public static newInstance(var0: string | null, var1: string | null, var2: string | null): Promise<URL>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'int'
     * @param var3 original type: 'java.lang.String'
     * @param var4 original type: 'java.net.URLStreamHandler'
     * @return original return type: 'java.net.URL'
     */
    public static newInstance(var0: string | null, var1: string | null, var2: java_lang_Integer | number, var3: string | null, var4: java_net_URLStreamHandler | null): Promise<URL>;
    // ================== Constructors ==================
    /**
     * @param var0 original type: 'java.net.URL'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'java.net.URLStreamHandler'
     */
    public constructor(var0: URLClass | null, var1: string | null, var2: java_net_URLStreamHandler | null);
    /**
     * @param var0 original type: 'java.net.URL'
     * @param var1 original type: 'java.lang.String'
     */
    public constructor(var0: URLClass | null, var1: string | null);
    /**
     * @param var0 original type: 'java.lang.String'
     */
    public constructor(var0: string | null);
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'int'
     * @param var3 original type: 'java.lang.String'
     */
    public constructor(var0: string | null, var1: string | null, var2: java_lang_Integer | number, var3: string | null);
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'java.lang.String'
     */
    public constructor(var0: string | null, var1: string | null, var2: string | null);
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'int'
     * @param var3 original type: 'java.lang.String'
     * @param var4 original type: 'java.net.URLStreamHandler'
     */
    public constructor(var0: string | null, var1: string | null, var2: java_lang_Integer | number, var3: string | null, var4: java_net_URLStreamHandler | null);
}

/**
 * Class java.net.URL.
 *
 * This actually imports the java class for further use.
 * The class URLClass only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export class URL extends importClass<typeof URLClass>("java.net.URL") {
}
export default URL;