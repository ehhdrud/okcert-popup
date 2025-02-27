import { importClass, JavaClass, BasicOrJavaType } from 'java-bridge';
import { Channel as java_nio_channels_Channel } from './Channel';
import { Long as java_lang_Long } from './../../lang/Long';
import { FileChannel as java_nio_channels_FileChannel } from './FileChannel';
import { Integer as java_lang_Integer } from './../../lang/Integer';
import { Class as java_lang_Class } from './../../lang/Class';

/**
 * This class just defines types, you should import FileLock instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class FileLockClass extends JavaClass {
  // ================== Method acquiredBy ==================
  /**
   * @return original return type: 'java.nio.channels.Channel'
   */
  public acquiredBy(): Promise<java_nio_channels_Channel | null>;
  // ================== Method acquiredBy ==================
  /**
   * @return original return type: 'java.nio.channels.Channel'
   */
  public acquiredBySync(): java_nio_channels_Channel | null;
  // ================== Method isShared ==================
  /**
   * @return original return type: 'boolean'
   */
  public isShared(): Promise<boolean>;
  // ================== Method isShared ==================
  /**
   * @return original return type: 'boolean'
   */
  public isSharedSync(): boolean;
  // ================== Method overlaps ==================
  /**
   * @param var0 original type: 'long'
   * @param var1 original type: 'long'
   * @return original return type: 'boolean'
   */
  public overlaps(var0: java_lang_Long | bigint | number, var1: java_lang_Long | bigint | number): Promise<boolean>;
  // ================== Method overlaps ==================
  /**
   * @param var0 original type: 'long'
   * @param var1 original type: 'long'
   * @return original return type: 'boolean'
   */
  public overlapsSync(var0: java_lang_Long | bigint | number, var1: java_lang_Long | bigint | number): boolean;
  // ================== Method release ==================
  /**
   * @return original return type: 'void'
   */
  public release(): Promise<void>;
  // ================== Method release ==================
  /**
   * @return original return type: 'void'
   */
  public releaseSync(): void;
  // ================== Method isValid ==================
  /**
   * @return original return type: 'boolean'
   */
  public isValid(): Promise<boolean>;
  // ================== Method isValid ==================
  /**
   * @return original return type: 'boolean'
   */
  public isValidSync(): boolean;
  // ================== Method toString ==================
  /**
   * @return original return type: 'java.lang.String'
   */

  // ================== Method toString ==================
  /**
   * @return original return type: 'java.lang.String'
   */
  public toStringSync(): string;
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
  // ================== Method position ==================
  /**
   * @return original return type: 'long'
   */
  public position(): Promise<number>;
  // ================== Method position ==================
  /**
   * @return original return type: 'long'
   */
  public positionSync(): number;
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
  // ================== Method channel ==================
  /**
   * @return original return type: 'java.nio.channels.FileChannel'
   */
  public channel(): Promise<java_nio_channels_FileChannel | null>;
  // ================== Method channel ==================
  /**
   * @return original return type: 'java.nio.channels.FileChannel'
   */
  public channelSync(): java_nio_channels_FileChannel | null;
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
 * Class java.nio.channels.FileLock.
 *
 * This actually imports the java class for further use.
 * The class FileLockClass only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export class FileLock extends importClass<typeof FileLockClass>('java.nio.channels.FileLock') {
  /**
   * Private constructor to prevent instantiation
   * as this is either an abstract class or an interface
   */
  private constructor() {
    super();
  }
}
export default FileLock;
