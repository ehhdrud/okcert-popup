import { importClass, JavaClass, BasicOrJavaType } from 'java-bridge';
import { Class as java_lang_Class } from './Class';
import { Integer as java_lang_Integer } from './Integer';
import { Long as java_lang_Long } from './Long';

/**
 * This class just defines types, you should import Short instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class ShortClass extends JavaClass {
  // ================== Field MIN_VALUE ==================
  /**
   * Original type: 'short'
   */
  public static readonly MIN_VALUE: ShortClass | number;
  // ================== Field MAX_VALUE ==================
  /**
   * Original type: 'short'
   */
  public static readonly MAX_VALUE: ShortClass | number;
  // ================== Field TYPE ==================
  /**
   * Original type: 'java.lang.Class'
   */
  public static readonly TYPE: java_lang_Class | null;
  // ================== Field SIZE ==================
  /**
   * Original type: 'int'
   */
  public static readonly SIZE: java_lang_Integer | number;
  // ================== Field BYTES ==================
  /**
   * Original type: 'int'
   */
  public static readonly BYTES: java_lang_Integer | number;
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
  /**
   * @param var0 original type: 'short'
   * @return original return type: 'java.lang.String'
   */
  public static toString(var0: ShortClass | number): Promise<string>;
  /**
   * @param var0 original type: 'short'
   * @return original return type: 'java.lang.String'
   */
  public static toStringSync(var0: ShortClass | number): string;
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
  /**
   * @param var0 original type: 'short'
   * @return original return type: 'int'
   */
  public static hashCode(var0: ShortClass | number): Promise<number>;
  /**
   * @param var0 original type: 'short'
   * @return original return type: 'int'
   */
  public static hashCodeSync(var0: ShortClass | number): number;
  // ================== Method reverseBytes ==================
  /**
   * @param var0 original type: 'short'
   * @return original return type: 'short'
   */
  public static reverseBytes(var0: ShortClass | number): Promise<number>;
  // ================== Method reverseBytes ==================
  /**
   * @param var0 original type: 'short'
   * @return original return type: 'short'
   */
  public static reverseBytesSync(var0: ShortClass | number): number;
  // ================== Method compareTo ==================
  /**
   * @param var0 original type: 'java.lang.Short'
   * @return original return type: 'int'
   */
  public compareTo(var0: ShortClass | number | null): Promise<number>;
  // ================== Method compareTo ==================
  /**
   * @param var0 original type: 'java.lang.Short'
   * @return original return type: 'int'
   */
  public compareToSync(var0: ShortClass | number | null): number;
  /**
   * @param var0 original type: 'java.lang.Object'
   * @return original return type: 'int'
   */
  public compareTo(var0: BasicOrJavaType | null): Promise<number>;
  /**
   * @param var0 original type: 'java.lang.Object'
   * @return original return type: 'int'
   */
  public compareToSync(var0: BasicOrJavaType | null): number;
  // ================== Method byteValue ==================
  /**
   * @return original return type: 'byte'
   */
  public byteValue(): Promise<number>;
  // ================== Method byteValue ==================
  /**
   * @return original return type: 'byte'
   */
  public byteValueSync(): number;
  // ================== Method shortValue ==================
  /**
   * @return original return type: 'short'
   */
  public shortValue(): Promise<number>;
  // ================== Method shortValue ==================
  /**
   * @return original return type: 'short'
   */
  public shortValueSync(): number;
  // ================== Method intValue ==================
  /**
   * @return original return type: 'int'
   */
  public intValue(): Promise<number>;
  // ================== Method intValue ==================
  /**
   * @return original return type: 'int'
   */
  public intValueSync(): number;
  // ================== Method longValue ==================
  /**
   * @return original return type: 'long'
   */
  public longValue(): Promise<number>;
  // ================== Method longValue ==================
  /**
   * @return original return type: 'long'
   */
  public longValueSync(): number;
  // ================== Method floatValue ==================
  /**
   * @return original return type: 'float'
   */
  public floatValue(): Promise<number>;
  // ================== Method floatValue ==================
  /**
   * @return original return type: 'float'
   */
  public floatValueSync(): number;
  // ================== Method doubleValue ==================
  /**
   * @return original return type: 'double'
   */
  public doubleValue(): Promise<number>;
  // ================== Method doubleValue ==================
  /**
   * @return original return type: 'double'
   */
  public doubleValueSync(): number;
  // ================== Method valueOf ==================
  /**
   * @param var0 original type: 'java.lang.String'
   * @param var1 original type: 'int'
   * @return original return type: 'java.lang.Short'
   */
  public static valueOf(var0: string | null, var1: java_lang_Integer | number): Promise<number | null>;
  // ================== Method valueOf ==================
  /**
   * @param var0 original type: 'java.lang.String'
   * @param var1 original type: 'int'
   * @return original return type: 'java.lang.Short'
   */
  public static valueOfSync(var0: string | null, var1: java_lang_Integer | number): number | null;
  /**
   * @param var0 original type: 'short'
   * @return original return type: 'java.lang.Short'
   */
  public static valueOf(var0: ShortClass | number): Promise<number | null>;
  /**
   * @param var0 original type: 'short'
   * @return original return type: 'java.lang.Short'
   */
  public static valueOfSync(var0: ShortClass | number): number | null;
  /**
   * @param var0 original type: 'java.lang.String'
   * @return original return type: 'java.lang.Short'
   */
  public static valueOf(var0: string | null): Promise<number | null>;
  /**
   * @param var0 original type: 'java.lang.String'
   * @return original return type: 'java.lang.Short'
   */
  public static valueOfSync(var0: string | null): number | null;
  // ================== Method decode ==================
  /**
   * @param var0 original type: 'java.lang.String'
   * @return original return type: 'java.lang.Short'
   */
  public static decode(var0: string | null): Promise<number | null>;
  // ================== Method decode ==================
  /**
   * @param var0 original type: 'java.lang.String'
   * @return original return type: 'java.lang.Short'
   */
  public static decodeSync(var0: string | null): number | null;
  // ================== Method compare ==================
  /**
   * @param var0 original type: 'short'
   * @param var1 original type: 'short'
   * @return original return type: 'int'
   */
  public static compare(var0: ShortClass | number, var1: ShortClass | number): Promise<number>;
  // ================== Method compare ==================
  /**
   * @param var0 original type: 'short'
   * @param var1 original type: 'short'
   * @return original return type: 'int'
   */
  public static compareSync(var0: ShortClass | number, var1: ShortClass | number): number;
  // ================== Method toUnsignedInt ==================
  /**
   * @param var0 original type: 'short'
   * @return original return type: 'int'
   */
  public static toUnsignedInt(var0: ShortClass | number): Promise<number>;
  // ================== Method toUnsignedInt ==================
  /**
   * @param var0 original type: 'short'
   * @return original return type: 'int'
   */
  public static toUnsignedIntSync(var0: ShortClass | number): number;
  // ================== Method toUnsignedLong ==================
  /**
   * @param var0 original type: 'short'
   * @return original return type: 'long'
   */
  public static toUnsignedLong(var0: ShortClass | number): Promise<number>;
  // ================== Method toUnsignedLong ==================
  /**
   * @param var0 original type: 'short'
   * @return original return type: 'long'
   */
  public static toUnsignedLongSync(var0: ShortClass | number): number;
  // ================== Method parseShort ==================
  /**
   * @param var0 original type: 'java.lang.String'
   * @param var1 original type: 'int'
   * @return original return type: 'short'
   */
  public static parseShort(var0: string | null, var1: java_lang_Integer | number): Promise<number>;
  // ================== Method parseShort ==================
  /**
   * @param var0 original type: 'java.lang.String'
   * @param var1 original type: 'int'
   * @return original return type: 'short'
   */
  public static parseShortSync(var0: string | null, var1: java_lang_Integer | number): number;
  /**
   * @param var0 original type: 'java.lang.String'
   * @return original return type: 'short'
   */
  public static parseShort(var0: string | null): Promise<number>;
  /**
   * @param var0 original type: 'java.lang.String'
   * @return original return type: 'short'
   */
  public static parseShortSync(var0: string | null): number;
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
   * @param var0 original type: 'short'
   * @return original return type: 'java.lang.Short'
   */
  public static newInstance(var0: ShortClass | number): Promise<number>;
  /**
   * @param var0 original type: 'java.lang.String'
   * @return original return type: 'java.lang.Short'
   */
  public static newInstance(var0: string | null): Promise<number>;
  // ================== Constructors ==================
  /**
   * @param var0 original type: 'short'
   */
  public constructor(var0: ShortClass | number);
  /**
   * @param var0 original type: 'java.lang.String'
   */
  public constructor(var0: string | null);
}

/**
 * Class java.lang.Short.
 *
 * This actually imports the java class for further use.
 * The class ShortClass only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export class Short extends importClass<typeof ShortClass>('java.lang.Short') {}
export default Short;
