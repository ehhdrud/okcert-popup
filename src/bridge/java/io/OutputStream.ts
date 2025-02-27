import { importClass, JavaClass, BasicOrJavaType } from 'java-bridge';
import { Integer as java_lang_Integer } from './../lang/Integer';
import { Long as java_lang_Long } from './../lang/Long';
import { Class as java_lang_Class } from './../lang/Class';

/**
 * This class just defines types, you should import OutputStream instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class OutputStreamClass extends JavaClass {
  // ================== Method write ==================
  /**
   * @param var0 original type: 'byte[]'
   * @param var1 original type: 'int'
   * @param var2 original type: 'int'
   * @return original return type: 'void'
   */
  public write(var0: Buffer | null, var1: java_lang_Integer | number, var2: java_lang_Integer | number): Promise<void>;
  // ================== Method write ==================
  /**
   * @param var0 original type: 'byte[]'
   * @param var1 original type: 'int'
   * @param var2 original type: 'int'
   * @return original return type: 'void'
   */
  public writeSync(var0: Buffer | null, var1: java_lang_Integer | number, var2: java_lang_Integer | number): void;
  /**
   * @param var0 original type: 'byte[]'
   * @return original return type: 'void'
   */
  public write(var0: Buffer | null): Promise<void>;
  /**
   * @param var0 original type: 'byte[]'
   * @return original return type: 'void'
   */
  public writeSync(var0: Buffer | null): void;
  /**
   * @param var0 original type: 'int'
   * @return original return type: 'void'
   */
  public write(var0: java_lang_Integer | number): Promise<void>;
  /**
   * @param var0 original type: 'int'
   * @return original return type: 'void'
   */
  public writeSync(var0: java_lang_Integer | number): void;
  // ================== Method flush ==================
  /**
   * @return original return type: 'void'
   */
  public flush(): Promise<void>;
  // ================== Method flush ==================
  /**
   * @return original return type: 'void'
   */
  public flushSync(): void;
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
 * Class java.io.OutputStream.
 *
 * This actually imports the java class for further use.
 * The class OutputStreamClass only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export class OutputStream extends importClass<typeof OutputStreamClass>('java.io.OutputStream') {
  /**
   * Private constructor to prevent instantiation
   * as this is either an abstract class or an interface
   */
  private constructor() {
    super();
  }
}
export default OutputStream;
