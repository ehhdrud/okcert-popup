import { importClass, JavaClass, BasicOrJavaType } from "java-bridge";
import { Path as java_nio_file_Path } from "./../Path";
import { LinkOption as java_nio_file_LinkOption } from "./../LinkOption";
import { List as java_util_List } from "./../../../util/List";
import { InputStream as java_io_InputStream } from "./../../../io/InputStream";
import { OpenOption as java_nio_file_OpenOption } from "./../OpenOption";
import { OutputStream as java_io_OutputStream } from "./../../../io/OutputStream";
import { FileSystem as java_nio_file_FileSystem } from "./../FileSystem";
import { Map as java_util_Map } from "./../../../util/Map";
import { URI as java_net_URI } from "./../../../net/URI";
import { FileStore as java_nio_file_FileStore } from "./../FileStore";
import { FileAttributeView as java_nio_file_attribute_FileAttributeView } from "./../attribute/FileAttributeView";
import { Class as java_lang_Class } from "./../../../lang/Class";
import { BasicFileAttributes as java_nio_file_attribute_BasicFileAttributes } from "./../attribute/BasicFileAttributes";
import { FileChannel as java_nio_channels_FileChannel } from "./../../channels/FileChannel";
import { Set as java_util_Set } from "./../../../util/Set";
import { FileAttribute as java_nio_file_attribute_FileAttribute } from "./../attribute/FileAttribute";
import { AsynchronousFileChannel as java_nio_channels_AsynchronousFileChannel } from "./../../channels/AsynchronousFileChannel";
import { ExecutorService as java_util_concurrent_ExecutorService } from "./../../../util/concurrent/ExecutorService";
import { SeekableByteChannel as java_nio_channels_SeekableByteChannel } from "./../../channels/SeekableByteChannel";
import { CopyOption as java_nio_file_CopyOption } from "./../CopyOption";
import { DirectoryStream as java_nio_file_DirectoryStream } from "./../DirectoryStream";
import { DirectoryStream$Filter as java_nio_file_DirectoryStream$Filter } from "./../DirectoryStream$Filter";
import { AccessMode as java_nio_file_AccessMode } from "./../AccessMode";
import { Long as java_lang_Long } from "./../../../lang/Long";
import { Integer as java_lang_Integer } from "./../../../lang/Integer";

/**
 * This class just defines types, you should import FileSystemProvider instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class FileSystemProviderClass extends JavaClass {
    // ================== Method setAttribute ==================
    /**
     * @param var0 original type: 'java.nio.file.Path'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'java.lang.Object'
     * @param var3 original type: 'java.nio.file.LinkOption[]'
     * @return original return type: 'void'
     */
    public setAttribute(var0: java_nio_file_Path | null, var1: string | null, var2: BasicOrJavaType | null, var3: (java_nio_file_LinkOption | null)[] | null): Promise<void>;
    // ================== Method setAttribute ==================
    /**
     * @param var0 original type: 'java.nio.file.Path'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'java.lang.Object'
     * @param var3 original type: 'java.nio.file.LinkOption[]'
     * @return original return type: 'void'
     */
    public setAttributeSync(var0: java_nio_file_Path | null, var1: string | null, var2: BasicOrJavaType | null, var3: (java_nio_file_LinkOption | null)[] | null): void;
    // ================== Method deleteIfExists ==================
    /**
     * @param var0 original type: 'java.nio.file.Path'
     * @return original return type: 'boolean'
     */
    public deleteIfExists(var0: java_nio_file_Path | null): Promise<boolean>;
    // ================== Method deleteIfExists ==================
    /**
     * @param var0 original type: 'java.nio.file.Path'
     * @return original return type: 'boolean'
     */
    public deleteIfExistsSync(var0: java_nio_file_Path | null): boolean;
    // ================== Method installedProviders ==================
    /**
     * @return original return type: 'java.util.List'
     */
    public static installedProviders(): Promise<java_util_List | null>;
    // ================== Method installedProviders ==================
    /**
     * @return original return type: 'java.util.List'
     */
    public static installedProvidersSync(): java_util_List | null;
    // ================== Method newInputStream ==================
    /**
     * @param var0 original type: 'java.nio.file.Path'
     * @param var1 original type: 'java.nio.file.OpenOption[]'
     * @return original return type: 'java.io.InputStream'
     */
    public newInputStream(var0: java_nio_file_Path | null, var1: (java_nio_file_OpenOption | null)[] | null): Promise<java_io_InputStream | null>;
    // ================== Method newInputStream ==================
    /**
     * @param var0 original type: 'java.nio.file.Path'
     * @param var1 original type: 'java.nio.file.OpenOption[]'
     * @return original return type: 'java.io.InputStream'
     */
    public newInputStreamSync(var0: java_nio_file_Path | null, var1: (java_nio_file_OpenOption | null)[] | null): java_io_InputStream | null;
    // ================== Method newOutputStream ==================
    /**
     * @param var0 original type: 'java.nio.file.Path'
     * @param var1 original type: 'java.nio.file.OpenOption[]'
     * @return original return type: 'java.io.OutputStream'
     */
    public newOutputStream(var0: java_nio_file_Path | null, var1: (java_nio_file_OpenOption | null)[] | null): Promise<java_io_OutputStream | null>;
    // ================== Method newOutputStream ==================
    /**
     * @param var0 original type: 'java.nio.file.Path'
     * @param var1 original type: 'java.nio.file.OpenOption[]'
     * @return original return type: 'java.io.OutputStream'
     */
    public newOutputStreamSync(var0: java_nio_file_Path | null, var1: (java_nio_file_OpenOption | null)[] | null): java_io_OutputStream | null;
    // ================== Method newFileSystem ==================
    /**
     * @param var0 original type: 'java.nio.file.Path'
     * @param var1 original type: 'java.util.Map'
     * @return original return type: 'java.nio.file.FileSystem'
     */
    public newFileSystem(var0: java_nio_file_Path | null, var1: java_util_Map | null): Promise<java_nio_file_FileSystem | null>;
    // ================== Method newFileSystem ==================
    /**
     * @param var0 original type: 'java.nio.file.Path'
     * @param var1 original type: 'java.util.Map'
     * @return original return type: 'java.nio.file.FileSystem'
     */
    public newFileSystemSync(var0: java_nio_file_Path | null, var1: java_util_Map | null): java_nio_file_FileSystem | null;
    /**
     * @param var0 original type: 'java.net.URI'
     * @param var1 original type: 'java.util.Map'
     * @return original return type: 'java.nio.file.FileSystem'
     */
    public newFileSystem(var0: java_net_URI | null, var1: java_util_Map | null): Promise<java_nio_file_FileSystem | null>;
    /**
     * @param var0 original type: 'java.net.URI'
     * @param var1 original type: 'java.util.Map'
     * @return original return type: 'java.nio.file.FileSystem'
     */
    public newFileSystemSync(var0: java_net_URI | null, var1: java_util_Map | null): java_nio_file_FileSystem | null;
    // ================== Method getFileStore ==================
    /**
     * @param var0 original type: 'java.nio.file.Path'
     * @return original return type: 'java.nio.file.FileStore'
     */
    public getFileStore(var0: java_nio_file_Path | null): Promise<java_nio_file_FileStore | null>;
    // ================== Method getFileStore ==================
    /**
     * @param var0 original type: 'java.nio.file.Path'
     * @return original return type: 'java.nio.file.FileStore'
     */
    public getFileStoreSync(var0: java_nio_file_Path | null): java_nio_file_FileStore | null;
    // ================== Method getFileAttributeView ==================
    /**
     * @param var0 original type: 'java.nio.file.Path'
     * @param var1 original type: 'java.lang.Class'
     * @param var2 original type: 'java.nio.file.LinkOption[]'
     * @return original return type: 'java.nio.file.attribute.FileAttributeView'
     */
    public getFileAttributeView(var0: java_nio_file_Path | null, var1: java_lang_Class | null, var2: (java_nio_file_LinkOption | null)[] | null): Promise<java_nio_file_attribute_FileAttributeView | null>;
    // ================== Method getFileAttributeView ==================
    /**
     * @param var0 original type: 'java.nio.file.Path'
     * @param var1 original type: 'java.lang.Class'
     * @param var2 original type: 'java.nio.file.LinkOption[]'
     * @return original return type: 'java.nio.file.attribute.FileAttributeView'
     */
    public getFileAttributeViewSync(var0: java_nio_file_Path | null, var1: java_lang_Class | null, var2: (java_nio_file_LinkOption | null)[] | null): java_nio_file_attribute_FileAttributeView | null;
    // ================== Method readAttributes ==================
    /**
     * @param var0 original type: 'java.nio.file.Path'
     * @param var1 original type: 'java.lang.Class'
     * @param var2 original type: 'java.nio.file.LinkOption[]'
     * @return original return type: 'java.nio.file.attribute.BasicFileAttributes'
     */
    public readAttributes(var0: java_nio_file_Path | null, var1: java_lang_Class | null, var2: (java_nio_file_LinkOption | null)[] | null): Promise<java_nio_file_attribute_BasicFileAttributes | null>;
    // ================== Method readAttributes ==================
    /**
     * @param var0 original type: 'java.nio.file.Path'
     * @param var1 original type: 'java.lang.Class'
     * @param var2 original type: 'java.nio.file.LinkOption[]'
     * @return original return type: 'java.nio.file.attribute.BasicFileAttributes'
     */
    public readAttributesSync(var0: java_nio_file_Path | null, var1: java_lang_Class | null, var2: (java_nio_file_LinkOption | null)[] | null): java_nio_file_attribute_BasicFileAttributes | null;
    /**
     * @param var0 original type: 'java.nio.file.Path'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'java.nio.file.LinkOption[]'
     * @return original return type: 'java.util.Map'
     */
    public readAttributes(var0: java_nio_file_Path | null, var1: string | null, var2: (java_nio_file_LinkOption | null)[] | null): Promise<java_util_Map | null>;
    /**
     * @param var0 original type: 'java.nio.file.Path'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'java.nio.file.LinkOption[]'
     * @return original return type: 'java.util.Map'
     */
    public readAttributesSync(var0: java_nio_file_Path | null, var1: string | null, var2: (java_nio_file_LinkOption | null)[] | null): java_util_Map | null;
    // ================== Method newFileChannel ==================
    /**
     * @param var0 original type: 'java.nio.file.Path'
     * @param var1 original type: 'java.util.Set'
     * @param var2 original type: 'java.nio.file.attribute.FileAttribute[]'
     * @return original return type: 'java.nio.channels.FileChannel'
     */
    public newFileChannel(var0: java_nio_file_Path | null, var1: java_util_Set | null, var2: (java_nio_file_attribute_FileAttribute | null)[] | null): Promise<java_nio_channels_FileChannel | null>;
    // ================== Method newFileChannel ==================
    /**
     * @param var0 original type: 'java.nio.file.Path'
     * @param var1 original type: 'java.util.Set'
     * @param var2 original type: 'java.nio.file.attribute.FileAttribute[]'
     * @return original return type: 'java.nio.channels.FileChannel'
     */
    public newFileChannelSync(var0: java_nio_file_Path | null, var1: java_util_Set | null, var2: (java_nio_file_attribute_FileAttribute | null)[] | null): java_nio_channels_FileChannel | null;
    // ================== Method newAsynchronousFileChannel ==================
    /**
     * @param var0 original type: 'java.nio.file.Path'
     * @param var1 original type: 'java.util.Set'
     * @param var2 original type: 'java.util.concurrent.ExecutorService'
     * @param var3 original type: 'java.nio.file.attribute.FileAttribute[]'
     * @return original return type: 'java.nio.channels.AsynchronousFileChannel'
     */
    public newAsynchronousFileChannel(var0: java_nio_file_Path | null, var1: java_util_Set | null, var2: java_util_concurrent_ExecutorService | null, var3: (java_nio_file_attribute_FileAttribute | null)[] | null): Promise<java_nio_channels_AsynchronousFileChannel | null>;
    // ================== Method newAsynchronousFileChannel ==================
    /**
     * @param var0 original type: 'java.nio.file.Path'
     * @param var1 original type: 'java.util.Set'
     * @param var2 original type: 'java.util.concurrent.ExecutorService'
     * @param var3 original type: 'java.nio.file.attribute.FileAttribute[]'
     * @return original return type: 'java.nio.channels.AsynchronousFileChannel'
     */
    public newAsynchronousFileChannelSync(var0: java_nio_file_Path | null, var1: java_util_Set | null, var2: java_util_concurrent_ExecutorService | null, var3: (java_nio_file_attribute_FileAttribute | null)[] | null): java_nio_channels_AsynchronousFileChannel | null;
    // ================== Method newByteChannel ==================
    /**
     * @param var0 original type: 'java.nio.file.Path'
     * @param var1 original type: 'java.util.Set'
     * @param var2 original type: 'java.nio.file.attribute.FileAttribute[]'
     * @return original return type: 'java.nio.channels.SeekableByteChannel'
     */
    public newByteChannel(var0: java_nio_file_Path | null, var1: java_util_Set | null, var2: (java_nio_file_attribute_FileAttribute | null)[] | null): Promise<java_nio_channels_SeekableByteChannel | null>;
    // ================== Method newByteChannel ==================
    /**
     * @param var0 original type: 'java.nio.file.Path'
     * @param var1 original type: 'java.util.Set'
     * @param var2 original type: 'java.nio.file.attribute.FileAttribute[]'
     * @return original return type: 'java.nio.channels.SeekableByteChannel'
     */
    public newByteChannelSync(var0: java_nio_file_Path | null, var1: java_util_Set | null, var2: (java_nio_file_attribute_FileAttribute | null)[] | null): java_nio_channels_SeekableByteChannel | null;
    // ================== Method move ==================
    /**
     * @param var0 original type: 'java.nio.file.Path'
     * @param var1 original type: 'java.nio.file.Path'
     * @param var2 original type: 'java.nio.file.CopyOption[]'
     * @return original return type: 'void'
     */
    public move(var0: java_nio_file_Path | null, var1: java_nio_file_Path | null, var2: (java_nio_file_CopyOption | null)[] | null): Promise<void>;
    // ================== Method move ==================
    /**
     * @param var0 original type: 'java.nio.file.Path'
     * @param var1 original type: 'java.nio.file.Path'
     * @param var2 original type: 'java.nio.file.CopyOption[]'
     * @return original return type: 'void'
     */
    public moveSync(var0: java_nio_file_Path | null, var1: java_nio_file_Path | null, var2: (java_nio_file_CopyOption | null)[] | null): void;
    // ================== Method isSameFile ==================
    /**
     * @param var0 original type: 'java.nio.file.Path'
     * @param var1 original type: 'java.nio.file.Path'
     * @return original return type: 'boolean'
     */
    public isSameFile(var0: java_nio_file_Path | null, var1: java_nio_file_Path | null): Promise<boolean>;
    // ================== Method isSameFile ==================
    /**
     * @param var0 original type: 'java.nio.file.Path'
     * @param var1 original type: 'java.nio.file.Path'
     * @return original return type: 'boolean'
     */
    public isSameFileSync(var0: java_nio_file_Path | null, var1: java_nio_file_Path | null): boolean;
    // ================== Method newDirectoryStream ==================
    /**
     * @param var0 original type: 'java.nio.file.Path'
     * @param var1 original type: 'java.nio.file.DirectoryStream$Filter'
     * @return original return type: 'java.nio.file.DirectoryStream'
     */
    public newDirectoryStream(var0: java_nio_file_Path | null, var1: java_nio_file_DirectoryStream$Filter | null): Promise<java_nio_file_DirectoryStream | null>;
    // ================== Method newDirectoryStream ==================
    /**
     * @param var0 original type: 'java.nio.file.Path'
     * @param var1 original type: 'java.nio.file.DirectoryStream$Filter'
     * @return original return type: 'java.nio.file.DirectoryStream'
     */
    public newDirectoryStreamSync(var0: java_nio_file_Path | null, var1: java_nio_file_DirectoryStream$Filter | null): java_nio_file_DirectoryStream | null;
    // ================== Method createSymbolicLink ==================
    /**
     * @param var0 original type: 'java.nio.file.Path'
     * @param var1 original type: 'java.nio.file.Path'
     * @param var2 original type: 'java.nio.file.attribute.FileAttribute[]'
     * @return original return type: 'void'
     */
    public createSymbolicLink(var0: java_nio_file_Path | null, var1: java_nio_file_Path | null, var2: (java_nio_file_attribute_FileAttribute | null)[] | null): Promise<void>;
    // ================== Method createSymbolicLink ==================
    /**
     * @param var0 original type: 'java.nio.file.Path'
     * @param var1 original type: 'java.nio.file.Path'
     * @param var2 original type: 'java.nio.file.attribute.FileAttribute[]'
     * @return original return type: 'void'
     */
    public createSymbolicLinkSync(var0: java_nio_file_Path | null, var1: java_nio_file_Path | null, var2: (java_nio_file_attribute_FileAttribute | null)[] | null): void;
    // ================== Method createLink ==================
    /**
     * @param var0 original type: 'java.nio.file.Path'
     * @param var1 original type: 'java.nio.file.Path'
     * @return original return type: 'void'
     */
    public createLink(var0: java_nio_file_Path | null, var1: java_nio_file_Path | null): Promise<void>;
    // ================== Method createLink ==================
    /**
     * @param var0 original type: 'java.nio.file.Path'
     * @param var1 original type: 'java.nio.file.Path'
     * @return original return type: 'void'
     */
    public createLinkSync(var0: java_nio_file_Path | null, var1: java_nio_file_Path | null): void;
    // ================== Method readSymbolicLink ==================
    /**
     * @param var0 original type: 'java.nio.file.Path'
     * @return original return type: 'java.nio.file.Path'
     */
    public readSymbolicLink(var0: java_nio_file_Path | null): Promise<java_nio_file_Path | null>;
    // ================== Method readSymbolicLink ==================
    /**
     * @param var0 original type: 'java.nio.file.Path'
     * @return original return type: 'java.nio.file.Path'
     */
    public readSymbolicLinkSync(var0: java_nio_file_Path | null): java_nio_file_Path | null;
    // ================== Method checkAccess ==================
    /**
     * @param var0 original type: 'java.nio.file.Path'
     * @param var1 original type: 'java.nio.file.AccessMode[]'
     * @return original return type: 'void'
     */
    public checkAccess(var0: java_nio_file_Path | null, var1: (java_nio_file_AccessMode | null)[] | null): Promise<void>;
    // ================== Method checkAccess ==================
    /**
     * @param var0 original type: 'java.nio.file.Path'
     * @param var1 original type: 'java.nio.file.AccessMode[]'
     * @return original return type: 'void'
     */
    public checkAccessSync(var0: java_nio_file_Path | null, var1: (java_nio_file_AccessMode | null)[] | null): void;
    // ================== Method delete ==================
    /**
     * @param var0 original type: 'java.nio.file.Path'
     * @return original return type: 'void'
     */
    public delete(var0: java_nio_file_Path | null): Promise<void>;
    // ================== Method delete ==================
    /**
     * @param var0 original type: 'java.nio.file.Path'
     * @return original return type: 'void'
     */
    public deleteSync(var0: java_nio_file_Path | null): void;
    // ================== Method copy ==================
    /**
     * @param var0 original type: 'java.nio.file.Path'
     * @param var1 original type: 'java.nio.file.Path'
     * @param var2 original type: 'java.nio.file.CopyOption[]'
     * @return original return type: 'void'
     */
    public copy(var0: java_nio_file_Path | null, var1: java_nio_file_Path | null, var2: (java_nio_file_CopyOption | null)[] | null): Promise<void>;
    // ================== Method copy ==================
    /**
     * @param var0 original type: 'java.nio.file.Path'
     * @param var1 original type: 'java.nio.file.Path'
     * @param var2 original type: 'java.nio.file.CopyOption[]'
     * @return original return type: 'void'
     */
    public copySync(var0: java_nio_file_Path | null, var1: java_nio_file_Path | null, var2: (java_nio_file_CopyOption | null)[] | null): void;
    // ================== Method getPath ==================
    /**
     * @param var0 original type: 'java.net.URI'
     * @return original return type: 'java.nio.file.Path'
     */
    public getPath(var0: java_net_URI | null): Promise<java_nio_file_Path | null>;
    // ================== Method getPath ==================
    /**
     * @param var0 original type: 'java.net.URI'
     * @return original return type: 'java.nio.file.Path'
     */
    public getPathSync(var0: java_net_URI | null): java_nio_file_Path | null;
    // ================== Method isHidden ==================
    /**
     * @param var0 original type: 'java.nio.file.Path'
     * @return original return type: 'boolean'
     */
    public isHidden(var0: java_nio_file_Path | null): Promise<boolean>;
    // ================== Method isHidden ==================
    /**
     * @param var0 original type: 'java.nio.file.Path'
     * @return original return type: 'boolean'
     */
    public isHiddenSync(var0: java_nio_file_Path | null): boolean;
    // ================== Method getScheme ==================
    /**
     * @return original return type: 'java.lang.String'
     */
    public getScheme(): Promise<string | null>;
    // ================== Method getScheme ==================
    /**
     * @return original return type: 'java.lang.String'
     */
    public getSchemeSync(): string | null;
    // ================== Method createDirectory ==================
    /**
     * @param var0 original type: 'java.nio.file.Path'
     * @param var1 original type: 'java.nio.file.attribute.FileAttribute[]'
     * @return original return type: 'void'
     */
    public createDirectory(var0: java_nio_file_Path | null, var1: (java_nio_file_attribute_FileAttribute | null)[] | null): Promise<void>;
    // ================== Method createDirectory ==================
    /**
     * @param var0 original type: 'java.nio.file.Path'
     * @param var1 original type: 'java.nio.file.attribute.FileAttribute[]'
     * @return original return type: 'void'
     */
    public createDirectorySync(var0: java_nio_file_Path | null, var1: (java_nio_file_attribute_FileAttribute | null)[] | null): void;
    // ================== Method getFileSystem ==================
    /**
     * @param var0 original type: 'java.net.URI'
     * @return original return type: 'java.nio.file.FileSystem'
     */
    public getFileSystem(var0: java_net_URI | null): Promise<java_nio_file_FileSystem | null>;
    // ================== Method getFileSystem ==================
    /**
     * @param var0 original type: 'java.net.URI'
     * @return original return type: 'java.nio.file.FileSystem'
     */
    public getFileSystemSync(var0: java_net_URI | null): java_nio_file_FileSystem | null;
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
 * Class java.nio.file.spi.FileSystemProvider.
 *
 * This actually imports the java class for further use.
 * The class FileSystemProviderClass only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export class FileSystemProvider extends importClass<typeof FileSystemProviderClass>("java.nio.file.spi.FileSystemProvider") {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor() {
        super();
    }
}
export default FileSystemProvider;