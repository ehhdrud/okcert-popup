import { importClass, JavaClass, BasicOrJavaType } from 'java-bridge';
import { Class as java_lang_Class } from './../../lang/Class';
import { FileStoreAttributeView as java_nio_file_attribute_FileStoreAttributeView } from './attribute/FileStoreAttributeView';
import { Long as java_lang_Long } from './../../lang/Long';
import { Integer as java_lang_Integer } from './../../lang/Integer';

/**
 * This class just defines types, you should import FileStore instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class FileStoreClass extends JavaClass {
  // ================== Method getAttribute ==================
  /**
   * @param var0 original type: 'java.lang.String'
   * @return original return type: 'java.lang.Object'
   */
  public getAttribute(var0: string | null): Promise<BasicOrJavaType | null>;
  // ================== Method getAttribute ==================
  /**
   * @param var0 original type: 'java.lang.String'
   * @return original return type: 'java.lang.Object'
   */
  public getAttributeSync(var0: string | null): BasicOrJavaType | null;
  // ================== Method getUnallocatedSpace ==================
  /**
   * @return original return type: 'long'
   */
  public getUnallocatedSpace(): Promise<number>;
  // ================== Method getUnallocatedSpace ==================
  /**
   * @return original return type: 'long'
   */
  public getUnallocatedSpaceSync(): number;
  // ================== Method supportsFileAttributeView ==================
  /**
   * @param var0 original type: 'java.lang.Class'
   * @return original return type: 'boolean'
   */
  public supportsFileAttributeView(var0: java_lang_Class | null): Promise<boolean>;
  // ================== Method supportsFileAttributeView ==================
  /**
   * @param var0 original type: 'java.lang.Class'
   * @return original return type: 'boolean'
   */
  public supportsFileAttributeViewSync(var0: java_lang_Class | null): boolean;
  /**
   * @param var0 original type: 'java.lang.String'
   * @return original return type: 'boolean'
   */
  public supportsFileAttributeView(var0: string | null): Promise<boolean>;
  /**
   * @param var0 original type: 'java.lang.String'
   * @return original return type: 'boolean'
   */
  public supportsFileAttributeViewSync(var0: string | null): boolean;
  // ================== Method getFileStoreAttributeView ==================
  /**
   * @param var0 original type: 'java.lang.Class'
   * @return original return type: 'java.nio.file.attribute.FileStoreAttributeView'
   */
  public getFileStoreAttributeView(
    var0: java_lang_Class | null,
  ): Promise<java_nio_file_attribute_FileStoreAttributeView | null>;
  // ================== Method getFileStoreAttributeView ==================
  /**
   * @param var0 original type: 'java.lang.Class'
   * @return original return type: 'java.nio.file.attribute.FileStoreAttributeView'
   */
  public getFileStoreAttributeViewSync(
    var0: java_lang_Class | null,
  ): java_nio_file_attribute_FileStoreAttributeView | null;
  // ================== Method name ==================
  /**
   * @return original return type: 'java.lang.String'
   */
  public name(): Promise<string | null>;
  // ================== Method name ==================
  /**
   * @return original return type: 'java.lang.String'
   */
  public nameSync(): string | null;
  // ================== Method type ==================
  /**
   * @return original return type: 'java.lang.String'
   */
  public type(): Promise<string | null>;
  // ================== Method type ==================
  /**
   * @return original return type: 'java.lang.String'
   */
  public typeSync(): string | null;
  // ================== Method getTotalSpace ==================
  /**
   * @return original return type: 'long'
   */
  public getTotalSpace(): Promise<number>;
  // ================== Method getTotalSpace ==================
  /**
   * @return original return type: 'long'
   */
  public getTotalSpaceSync(): number;
  // ================== Method getUsableSpace ==================
  /**
   * @return original return type: 'long'
   */
  public getUsableSpace(): Promise<number>;
  // ================== Method getUsableSpace ==================
  /**
   * @return original return type: 'long'
   */
  public getUsableSpaceSync(): number;
  // ================== Method isReadOnly ==================
  /**
   * @return original return type: 'boolean'
   */
  public isReadOnly(): Promise<boolean>;
  // ================== Method isReadOnly ==================
  /**
   * @return original return type: 'boolean'
   */
  public isReadOnlySync(): boolean;
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
 * Class java.nio.file.FileStore.
 *
 * This actually imports the java class for further use.
 * The class FileStoreClass only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export class FileStore extends importClass<typeof FileStoreClass>('java.nio.file.FileStore') {
  /**
   * Private constructor to prevent instantiation
   * as this is either an abstract class or an interface
   */
  private constructor() {
    super();
  }
}
export default FileStore;
