import { importClass, JavaClass, BasicOrJavaType } from 'java-bridge';
import { Iterator as java_util_Iterator } from './../../util/Iterator';
import { List as java_util_List } from './../../util/List';
import { Long as java_lang_Long } from './../../lang/Long';
import { Integer as java_lang_Integer } from './../../lang/Integer';
import { Class as java_lang_Class } from './../../lang/Class';

/**
 * This class just defines types, you should import CertPath instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class CertPathClass extends JavaClass {
  // ================== Method getEncodings ==================
  /**
   * @return original return type: 'java.util.Iterator'
   */
  public getEncodings(): Promise<java_util_Iterator | null>;
  // ================== Method getEncodings ==================
  /**
   * @return original return type: 'java.util.Iterator'
   */
  public getEncodingsSync(): java_util_Iterator | null;
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
  // ================== Method getCertificates ==================
  /**
   * @return original return type: 'java.util.List'
   */
  public getCertificates(): Promise<java_util_List | null>;
  // ================== Method getCertificates ==================
  /**
   * @return original return type: 'java.util.List'
   */
  public getCertificatesSync(): java_util_List | null;
  // ================== Method getType ==================
  /**
   * @return original return type: 'java.lang.String'
   */
  public getType(): Promise<string | null>;
  // ================== Method getType ==================
  /**
   * @return original return type: 'java.lang.String'
   */
  public getTypeSync(): string | null;
  // ================== Method getEncoded ==================
  /**
   * @param var0 original type: 'java.lang.String'
   * @return original return type: 'byte[]'
   */
  public getEncoded(var0: string | null): Promise<Buffer | null>;
  // ================== Method getEncoded ==================
  /**
   * @param var0 original type: 'java.lang.String'
   * @return original return type: 'byte[]'
   */
  public getEncodedSync(var0: string | null): Buffer | null;
  /**
   * @return original return type: 'byte[]'
   */
  public getEncoded(): Promise<Buffer | null>;
  /**
   * @return original return type: 'byte[]'
   */
  public getEncodedSync(): Buffer | null;
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
 * Class java.security.cert.CertPath.
 *
 * This actually imports the java class for further use.
 * The class CertPathClass only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export class CertPath extends importClass<typeof CertPathClass>('java.security.cert.CertPath') {
  /**
   * Private constructor to prevent instantiation
   * as this is either an abstract class or an interface
   */
  private constructor() {
    super();
  }
}
export default CertPath;
