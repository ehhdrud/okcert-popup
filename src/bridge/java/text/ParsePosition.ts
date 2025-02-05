import { importClass, JavaClass, BasicOrJavaType } from 'java-bridge';
import { Integer as java_lang_Integer } from './../lang/Integer';
import { Long as java_lang_Long } from './../lang/Long';
import { Class as java_lang_Class } from './../lang/Class';

/**
 * This class just defines types, you should import ParsePosition instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class ParsePositionClass extends JavaClass {
  // ================== Method getIndex ==================
  /**
   * @return original return type: 'int'
   */
  public getIndex(): Promise<number>;
  // ================== Method getIndex ==================
  /**
   * @return original return type: 'int'
   */
  public getIndexSync(): number;
  // ================== Method getErrorIndex ==================
  /**
   * @return original return type: 'int'
   */
  public getErrorIndex(): Promise<number>;
  // ================== Method getErrorIndex ==================
  /**
   * @return original return type: 'int'
   */
  public getErrorIndexSync(): number;
  // ================== Method setErrorIndex ==================
  /**
   * @param var0 original type: 'int'
   * @return original return type: 'void'
   */
  public setErrorIndex(var0: java_lang_Integer | number): Promise<void>;
  // ================== Method setErrorIndex ==================
  /**
   * @param var0 original type: 'int'
   * @return original return type: 'void'
   */
  public setErrorIndexSync(var0: java_lang_Integer | number): void;
  // ================== Method setIndex ==================
  /**
   * @param var0 original type: 'int'
   * @return original return type: 'void'
   */
  public setIndex(var0: java_lang_Integer | number): Promise<void>;
  // ================== Method setIndex ==================
  /**
   * @param var0 original type: 'int'
   * @return original return type: 'void'
   */
  public setIndexSync(var0: java_lang_Integer | number): void;
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
   * @param var0 original type: 'int'
   * @return original return type: 'java.text.ParsePosition'
   */
  public static newInstance(var0: java_lang_Integer | number): Promise<ParsePosition>;
  // ================== Constructors ==================
  /**
   * @param var0 original type: 'int'
   */
  public constructor(var0: java_lang_Integer | number);
}

/**
 * Class java.text.ParsePosition.
 *
 * This actually imports the java class for further use.
 * The class ParsePositionClass only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export class ParsePosition extends importClass<typeof ParsePositionClass>('java.text.ParsePosition') {}
export default ParsePosition;
