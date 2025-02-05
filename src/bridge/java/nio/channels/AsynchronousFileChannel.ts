import { importClass, JavaClass, BasicOrJavaType } from "java-bridge";
import { FileLock as java_nio_channels_FileLock } from "./FileLock";
import { Long as java_lang_Long } from "./../../lang/Long";
import { Boolean as java_lang_Boolean } from "./../../lang/Boolean";
import { Future as java_util_concurrent_Future } from "./../../util/concurrent/Future";
import { CompletionHandler as java_nio_channels_CompletionHandler } from "./CompletionHandler";
import { ByteBuffer as java_nio_ByteBuffer } from "./../ByteBuffer";
import { Path as java_nio_file_Path } from "./../file/Path";
import { OpenOption as java_nio_file_OpenOption } from "./../file/OpenOption";
import { Set as java_util_Set } from "./../../util/Set";
import { ExecutorService as java_util_concurrent_ExecutorService } from "./../../util/concurrent/ExecutorService";
import { FileAttribute as java_nio_file_attribute_FileAttribute } from "./../file/attribute/FileAttribute";
import { Integer as java_lang_Integer } from "./../../lang/Integer";
import { Class as java_lang_Class } from "./../../lang/Class";

/**
 * This class just defines types, you should import AsynchronousFileChannel instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class AsynchronousFileChannelClass extends JavaClass {
    // ================== Method tryLock ==================
    /**
     * @param var0 original type: 'long'
     * @param var1 original type: 'long'
     * @param var2 original type: 'boolean'
     * @return original return type: 'java.nio.channels.FileLock'
     */
    public tryLock(var0: java_lang_Long | bigint | number, var1: java_lang_Long | bigint | number, var2: java_lang_Boolean | boolean): Promise<java_nio_channels_FileLock | null>;
    // ================== Method tryLock ==================
    /**
     * @param var0 original type: 'long'
     * @param var1 original type: 'long'
     * @param var2 original type: 'boolean'
     * @return original return type: 'java.nio.channels.FileLock'
     */
    public tryLockSync(var0: java_lang_Long | bigint | number, var1: java_lang_Long | bigint | number, var2: java_lang_Boolean | boolean): java_nio_channels_FileLock | null;
    /**
     * @return original return type: 'java.nio.channels.FileLock'
     */
    public tryLock(): Promise<java_nio_channels_FileLock | null>;
    /**
     * @return original return type: 'java.nio.channels.FileLock'
     */
    public tryLockSync(): java_nio_channels_FileLock | null;
    // ================== Method force ==================
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'void'
     */
    public force(var0: java_lang_Boolean | boolean): Promise<void>;
    // ================== Method force ==================
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'void'
     */
    public forceSync(var0: java_lang_Boolean | boolean): void;
    // ================== Method lock ==================
    /**
     * @return original return type: 'java.util.concurrent.Future'
     */
    public lock(): Promise<java_util_concurrent_Future | null>;
    // ================== Method lock ==================
    /**
     * @return original return type: 'java.util.concurrent.Future'
     */
    public lockSync(): java_util_concurrent_Future | null;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @param var1 original type: 'java.nio.channels.CompletionHandler'
     * @return original return type: 'void'
     */
    public lock(var0: BasicOrJavaType | null, var1: java_nio_channels_CompletionHandler | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @param var1 original type: 'java.nio.channels.CompletionHandler'
     * @return original return type: 'void'
     */
    public lockSync(var0: BasicOrJavaType | null, var1: java_nio_channels_CompletionHandler | null): void;
    /**
     * @param var0 original type: 'long'
     * @param var1 original type: 'long'
     * @param var2 original type: 'boolean'
     * @return original return type: 'java.util.concurrent.Future'
     */
    public lock(var0: java_lang_Long | bigint | number, var1: java_lang_Long | bigint | number, var2: java_lang_Boolean | boolean): Promise<java_util_concurrent_Future | null>;
    /**
     * @param var0 original type: 'long'
     * @param var1 original type: 'long'
     * @param var2 original type: 'boolean'
     * @return original return type: 'java.util.concurrent.Future'
     */
    public lockSync(var0: java_lang_Long | bigint | number, var1: java_lang_Long | bigint | number, var2: java_lang_Boolean | boolean): java_util_concurrent_Future | null;
    /**
     * @param var0 original type: 'long'
     * @param var1 original type: 'long'
     * @param var2 original type: 'boolean'
     * @param var3 original type: 'java.lang.Object'
     * @param var4 original type: 'java.nio.channels.CompletionHandler'
     * @return original return type: 'void'
     */
    public lock(var0: java_lang_Long | bigint | number, var1: java_lang_Long | bigint | number, var2: java_lang_Boolean | boolean, var3: BasicOrJavaType | null, var4: java_nio_channels_CompletionHandler | null): Promise<void>;
    /**
     * @param var0 original type: 'long'
     * @param var1 original type: 'long'
     * @param var2 original type: 'boolean'
     * @param var3 original type: 'java.lang.Object'
     * @param var4 original type: 'java.nio.channels.CompletionHandler'
     * @return original return type: 'void'
     */
    public lockSync(var0: java_lang_Long | bigint | number, var1: java_lang_Long | bigint | number, var2: java_lang_Boolean | boolean, var3: BasicOrJavaType | null, var4: java_nio_channels_CompletionHandler | null): void;
    // ================== Method size ==================
    /**
     * @return original return type: 'long'
     */
    public size(): Promise<number>;
    // ================== Method size ==================
    /**
     * @return original return type: 'long'
     */
    public sizeSync(): number;
    // ================== Method write ==================
    /**
     * @param var0 original type: 'java.nio.ByteBuffer'
     * @param var1 original type: 'long'
     * @param var2 original type: 'java.lang.Object'
     * @param var3 original type: 'java.nio.channels.CompletionHandler'
     * @return original return type: 'void'
     */
    public write(var0: java_nio_ByteBuffer | null, var1: java_lang_Long | bigint | number, var2: BasicOrJavaType | null, var3: java_nio_channels_CompletionHandler | null): Promise<void>;
    // ================== Method write ==================
    /**
     * @param var0 original type: 'java.nio.ByteBuffer'
     * @param var1 original type: 'long'
     * @param var2 original type: 'java.lang.Object'
     * @param var3 original type: 'java.nio.channels.CompletionHandler'
     * @return original return type: 'void'
     */
    public writeSync(var0: java_nio_ByteBuffer | null, var1: java_lang_Long | bigint | number, var2: BasicOrJavaType | null, var3: java_nio_channels_CompletionHandler | null): void;
    /**
     * @param var0 original type: 'java.nio.ByteBuffer'
     * @param var1 original type: 'long'
     * @return original return type: 'java.util.concurrent.Future'
     */
    public write(var0: java_nio_ByteBuffer | null, var1: java_lang_Long | bigint | number): Promise<java_util_concurrent_Future | null>;
    /**
     * @param var0 original type: 'java.nio.ByteBuffer'
     * @param var1 original type: 'long'
     * @return original return type: 'java.util.concurrent.Future'
     */
    public writeSync(var0: java_nio_ByteBuffer | null, var1: java_lang_Long | bigint | number): java_util_concurrent_Future | null;
    // ================== Method read ==================
    /**
     * @param var0 original type: 'java.nio.ByteBuffer'
     * @param var1 original type: 'long'
     * @param var2 original type: 'java.lang.Object'
     * @param var3 original type: 'java.nio.channels.CompletionHandler'
     * @return original return type: 'void'
     */
    public read(var0: java_nio_ByteBuffer | null, var1: java_lang_Long | bigint | number, var2: BasicOrJavaType | null, var3: java_nio_channels_CompletionHandler | null): Promise<void>;
    // ================== Method read ==================
    /**
     * @param var0 original type: 'java.nio.ByteBuffer'
     * @param var1 original type: 'long'
     * @param var2 original type: 'java.lang.Object'
     * @param var3 original type: 'java.nio.channels.CompletionHandler'
     * @return original return type: 'void'
     */
    public readSync(var0: java_nio_ByteBuffer | null, var1: java_lang_Long | bigint | number, var2: BasicOrJavaType | null, var3: java_nio_channels_CompletionHandler | null): void;
    /**
     * @param var0 original type: 'java.nio.ByteBuffer'
     * @param var1 original type: 'long'
     * @return original return type: 'java.util.concurrent.Future'
     */
    public read(var0: java_nio_ByteBuffer | null, var1: java_lang_Long | bigint | number): Promise<java_util_concurrent_Future | null>;
    /**
     * @param var0 original type: 'java.nio.ByteBuffer'
     * @param var1 original type: 'long'
     * @return original return type: 'java.util.concurrent.Future'
     */
    public readSync(var0: java_nio_ByteBuffer | null, var1: java_lang_Long | bigint | number): java_util_concurrent_Future | null;
    // ================== Method truncate ==================
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'java.nio.channels.AsynchronousFileChannel'
     */
    public truncate(var0: java_lang_Long | bigint | number): Promise<AsynchronousFileChannel | null>;
    // ================== Method truncate ==================
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'java.nio.channels.AsynchronousFileChannel'
     */
    public truncateSync(var0: java_lang_Long | bigint | number): AsynchronousFileChannel | null;
    // ================== Method open ==================
    /**
     * @param var0 original type: 'java.nio.file.Path'
     * @param var1 original type: 'java.nio.file.OpenOption[]'
     * @return original return type: 'java.nio.channels.AsynchronousFileChannel'
     */
    public static open(var0: java_nio_file_Path | null, var1: (java_nio_file_OpenOption | null)[] | null): Promise<AsynchronousFileChannel | null>;
    // ================== Method open ==================
    /**
     * @param var0 original type: 'java.nio.file.Path'
     * @param var1 original type: 'java.nio.file.OpenOption[]'
     * @return original return type: 'java.nio.channels.AsynchronousFileChannel'
     */
    public static openSync(var0: java_nio_file_Path | null, var1: (java_nio_file_OpenOption | null)[] | null): AsynchronousFileChannel | null;
    /**
     * @param var0 original type: 'java.nio.file.Path'
     * @param var1 original type: 'java.util.Set'
     * @param var2 original type: 'java.util.concurrent.ExecutorService'
     * @param var3 original type: 'java.nio.file.attribute.FileAttribute[]'
     * @return original return type: 'java.nio.channels.AsynchronousFileChannel'
     */
    public static open(var0: java_nio_file_Path | null, var1: java_util_Set | null, var2: java_util_concurrent_ExecutorService | null, var3: (java_nio_file_attribute_FileAttribute | null)[] | null): Promise<AsynchronousFileChannel | null>;
    /**
     * @param var0 original type: 'java.nio.file.Path'
     * @param var1 original type: 'java.util.Set'
     * @param var2 original type: 'java.util.concurrent.ExecutorService'
     * @param var3 original type: 'java.nio.file.attribute.FileAttribute[]'
     * @return original return type: 'java.nio.channels.AsynchronousFileChannel'
     */
    public static openSync(var0: java_nio_file_Path | null, var1: java_util_Set | null, var2: java_util_concurrent_ExecutorService | null, var3: (java_nio_file_attribute_FileAttribute | null)[] | null): AsynchronousFileChannel | null;
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
    // ================== Method close ==================
    /**
     * @return original return type: 'void'
     */
    public close(): Promise<void>;
    // ================== Method close ==================
    /**
     * @return original return type: 'void'
     */
    public closeSync(): void;
    // ================== Method isOpen ==================
    /**
     * @return original return type: 'boolean'
     */
    public isOpen(): Promise<boolean>;
    // ================== Method isOpen ==================
    /**
     * @return original return type: 'boolean'
     */
    public isOpenSync(): boolean;
}

/**
 * Class java.nio.channels.AsynchronousFileChannel.
 *
 * This actually imports the java class for further use.
 * The class AsynchronousFileChannelClass only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export class AsynchronousFileChannel extends importClass<typeof AsynchronousFileChannelClass>("java.nio.channels.AsynchronousFileChannel") {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor() {
        super();
    }
}
export default AsynchronousFileChannel;