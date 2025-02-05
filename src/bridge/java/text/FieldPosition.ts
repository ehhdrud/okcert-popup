import { importClass, JavaClass, BasicOrJavaType } from 'java-bridge';
import { Format$Field as java_text_Format$Field } from './Format$Field';
import { Integer as java_lang_Integer } from './../lang/Integer';
import { Long as java_lang_Long } from './../lang/Long';
import { Class as java_lang_Class } from './../lang/Class';

/**
 * This class just defines types, you should import FieldPosition instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class FieldPositionClass extends JavaClass {
  // ================== Method getBeginIndex ==================
  /**
   * @return original return type: 'int'
   */
  public getBeginIndex(): Promise<number>;
  // ================== Method getBeginIndex ==================
  /**
   * @return original return type: 'int'
   */
  public getBeginIndexSync(): number;
  // ================== Method getEndIndex ==================
  /**
   * @return original return type: 'int'
   */
  public getEndIndex(): Promise<number>;
  // ================== Method getEndIndex ==================
  /**
   * @return original return type: 'int'
   */
  public getEndIndexSync(): number;
  // ================== Method getFieldAttribute ==================
  /**
   * @return original return type: 'java.text.Format$Field'
   */
  public getFieldAttribute(): Promise<java_text_Format$Field | null>;
  // ================== Method getFieldAttribute ==================
  /**
   * @return original return type: 'java.text.Format$Field'
   */
  public getFieldAttributeSync(): java_text_Format$Field | null;
  // ================== Method setBeginIndex ==================
  /**
   * @param var0 original type: 'int'
   * @return original return type: 'void'
   */
  public setBeginIndex(var0: java_lang_Integer | number): Promise<void>;
  // ================== Method setBeginIndex ==================
  /**
   * @param var0 original type: 'int'
   * @return original return type: 'void'
   */
  public setBeginIndexSync(var0: java_lang_Integer | number): void;
  // ================== Method setEndIndex ==================
  /**
   * @param var0 original type: 'int'
   * @return original return type: 'void'
   */
  public setEndIndex(var0: java_lang_Integer | number): Promise<void>;
  // ================== Method setEndIndex ==================
  /**
   * @param var0 original type: 'int'
   * @return original return type: 'void'
   */
  public setEndIndexSync(var0: java_lang_Integer | number): void;
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
  // ================== Method getField ==================
  /**
   * @return original return type: 'int'
   */
  public getField(): Promise<number>;
  // ================== Method getField ==================
  /**
   * @return original return type: 'int'
   */
  public getFieldSync(): number;
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
   * @return original return type: 'java.text.FieldPosition'
   */
  public static newInstance(var0: java_lang_Integer | number): Promise<FieldPosition>;
  /**
   * @param var0 original type: 'java.text.Format$Field'
   * @return original return type: 'java.text.FieldPosition'
   */
  public static newInstance(var0: java_text_Format$Field | null): Promise<FieldPosition>;
  /**
   * @param var0 original type: 'java.text.Format$Field'
   * @param var1 original type: 'int'
   * @return original return type: 'java.text.FieldPosition'
   */
  public static newInstance(
    var0: java_text_Format$Field | null,
    var1: java_lang_Integer | number,
  ): Promise<FieldPosition>;
  // ================== Constructors ==================
  /**
   * @param var0 original type: 'int'
   */
  public constructor(var0: java_lang_Integer | number);
  /**
   * @param var0 original type: 'java.text.Format$Field'
   */
  public constructor(var0: java_text_Format$Field | null);
  /**
   * @param var0 original type: 'java.text.Format$Field'
   * @param var1 original type: 'int'
   */
  public constructor(var0: java_text_Format$Field | null, var1: java_lang_Integer | number);
}

/**
 * Class java.text.FieldPosition.
 *
 * This actually imports the java class for further use.
 * The class FieldPositionClass only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export class FieldPosition extends importClass<typeof FieldPositionClass>('java.text.FieldPosition') {}
export default FieldPosition;
