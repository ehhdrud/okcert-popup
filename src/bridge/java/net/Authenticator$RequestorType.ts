import { importClass, JavaClass, BasicOrJavaType } from 'java-bridge';
import { Enum as java_lang_Enum } from './../lang/Enum';
import { Class as java_lang_Class } from './../lang/Class';
import { Long as java_lang_Long } from './../lang/Long';
import { Integer as java_lang_Integer } from './../lang/Integer';

/**
 * This class just defines types, you should import Authenticator$RequestorType instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class Authenticator$RequestorTypeClass extends JavaClass {
  // ================== Field PROXY ==================
  /**
   * Original type: 'java.net.Authenticator$RequestorType'
   */
  public static readonly PROXY: Authenticator$RequestorTypeClass | null;
  // ================== Field SERVER ==================
  /**
   * Original type: 'java.net.Authenticator$RequestorType'
   */
  public static readonly SERVER: Authenticator$RequestorTypeClass | null;
  // ================== Method values ==================
  /**
   * @return original return type: 'java.net.Authenticator$RequestorType[]'
   */
  public static values(): Promise<(Authenticator$RequestorType | null)[] | null>;
  // ================== Method values ==================
  /**
   * @return original return type: 'java.net.Authenticator$RequestorType[]'
   */
  public static valuesSync(): (Authenticator$RequestorType | null)[] | null;
  // ================== Method valueOf ==================
  /**
   * @param var0 original type: 'java.lang.String'
   * @return original return type: 'java.net.Authenticator$RequestorType'
   */
  public static valueOf(var0: string | null): Promise<Authenticator$RequestorType | null>;
  // ================== Method valueOf ==================
  /**
   * @param var0 original type: 'java.lang.String'
   * @return original return type: 'java.net.Authenticator$RequestorType'
   */
  public static valueOfSync(var0: string | null): Authenticator$RequestorType | null;
  /**
   * @param var0 original type: 'java.lang.Class'
   * @param var1 original type: 'java.lang.String'
   * @return original return type: 'java.lang.Enum'
   */
  public static valueOf(var0: java_lang_Class | null, var1: string | null): Promise<java_lang_Enum | null>;
  /**
   * @param var0 original type: 'java.lang.Class'
   * @param var1 original type: 'java.lang.String'
   * @return original return type: 'java.lang.Enum'
   */
  public static valueOfSync(var0: java_lang_Class | null, var1: string | null): java_lang_Enum | null;
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
  // ================== Method compareTo ==================
  /**
   * @param var0 original type: 'java.lang.Object'
   * @return original return type: 'int'
   */
  public compareTo(var0: BasicOrJavaType | null): Promise<number>;
  // ================== Method compareTo ==================
  /**
   * @param var0 original type: 'java.lang.Object'
   * @return original return type: 'int'
   */
  public compareToSync(var0: BasicOrJavaType | null): number;
  /**
   * @param var0 original type: 'java.lang.Enum'
   * @return original return type: 'int'
   */
  public compareTo(var0: java_lang_Enum | null): Promise<number>;
  /**
   * @param var0 original type: 'java.lang.Enum'
   * @return original return type: 'int'
   */
  public compareToSync(var0: java_lang_Enum | null): number;
  // ================== Method getDeclaringClass ==================
  /**
   * @return original return type: 'java.lang.Class'
   */
  public getDeclaringClass(): Promise<java_lang_Class | null>;
  // ================== Method getDeclaringClass ==================
  /**
   * @return original return type: 'java.lang.Class'
   */
  public getDeclaringClassSync(): java_lang_Class | null;
  // ================== Method ordinal ==================
  /**
   * @return original return type: 'int'
   */
  public ordinal(): Promise<number>;
  // ================== Method ordinal ==================
  /**
   * @return original return type: 'int'
   */
  public ordinalSync(): number;
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
}

/**
 * Class java.net.Authenticator$RequestorType.
 *
 * This actually imports the java class for further use.
 * The class Authenticator$RequestorTypeClass only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export class Authenticator$RequestorType extends importClass<typeof Authenticator$RequestorTypeClass>(
  'java.net.Authenticator$RequestorType',
) {}
export default Authenticator$RequestorType;
