import { importClass, JavaClass, BasicOrJavaType } from 'java-bridge';
import { AccessControlContext as java_security_AccessControlContext } from './../../../java/security/AccessControlContext';
import { PrivilegedExceptionAction as java_security_PrivilegedExceptionAction } from './../../../java/security/PrivilegedExceptionAction';
import { PrivilegedAction as java_security_PrivilegedAction } from './../../../java/security/PrivilegedAction';
import { Set as java_util_Set } from './../../../java/util/Set';
import { Class as java_lang_Class } from './../../../java/lang/Class';
import { Long as java_lang_Long } from './../../../java/lang/Long';
import { Integer as java_lang_Integer } from './../../../java/lang/Integer';
import { Boolean as java_lang_Boolean } from './../../../java/lang/Boolean';

/**
 * This class just defines types, you should import Subject instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class SubjectClass extends JavaClass {
  // ================== Method getSubject ==================
  /**
   * @param var0 original type: 'java.security.AccessControlContext'
   * @return original return type: 'javax.security.auth.Subject'
   */
  public static getSubject(var0: java_security_AccessControlContext | null): Promise<Subject | null>;
  // ================== Method getSubject ==================
  /**
   * @param var0 original type: 'java.security.AccessControlContext'
   * @return original return type: 'javax.security.auth.Subject'
   */
  public static getSubjectSync(var0: java_security_AccessControlContext | null): Subject | null;
  // ================== Method doAs ==================
  /**
   * @param var0 original type: 'javax.security.auth.Subject'
   * @param var1 original type: 'java.security.PrivilegedExceptionAction'
   * @return original return type: 'java.lang.Object'
   */
  public static doAs(
    var0: SubjectClass | null,
    var1: java_security_PrivilegedExceptionAction | null,
  ): Promise<BasicOrJavaType | null>;
  // ================== Method doAs ==================
  /**
   * @param var0 original type: 'javax.security.auth.Subject'
   * @param var1 original type: 'java.security.PrivilegedExceptionAction'
   * @return original return type: 'java.lang.Object'
   */
  public static doAsSync(
    var0: SubjectClass | null,
    var1: java_security_PrivilegedExceptionAction | null,
  ): BasicOrJavaType | null;
  /**
   * @param var0 original type: 'javax.security.auth.Subject'
   * @param var1 original type: 'java.security.PrivilegedAction'
   * @return original return type: 'java.lang.Object'
   */
  public static doAs(
    var0: SubjectClass | null,
    var1: java_security_PrivilegedAction | null,
  ): Promise<BasicOrJavaType | null>;
  /**
   * @param var0 original type: 'javax.security.auth.Subject'
   * @param var1 original type: 'java.security.PrivilegedAction'
   * @return original return type: 'java.lang.Object'
   */
  public static doAsSync(
    var0: SubjectClass | null,
    var1: java_security_PrivilegedAction | null,
  ): BasicOrJavaType | null;
  // ================== Method doAsPrivileged ==================
  /**
   * @param var0 original type: 'javax.security.auth.Subject'
   * @param var1 original type: 'java.security.PrivilegedAction'
   * @param var2 original type: 'java.security.AccessControlContext'
   * @return original return type: 'java.lang.Object'
   */
  public static doAsPrivileged(
    var0: SubjectClass | null,
    var1: java_security_PrivilegedAction | null,
    var2: java_security_AccessControlContext | null,
  ): Promise<BasicOrJavaType | null>;
  // ================== Method doAsPrivileged ==================
  /**
   * @param var0 original type: 'javax.security.auth.Subject'
   * @param var1 original type: 'java.security.PrivilegedAction'
   * @param var2 original type: 'java.security.AccessControlContext'
   * @return original return type: 'java.lang.Object'
   */
  public static doAsPrivilegedSync(
    var0: SubjectClass | null,
    var1: java_security_PrivilegedAction | null,
    var2: java_security_AccessControlContext | null,
  ): BasicOrJavaType | null;
  /**
   * @param var0 original type: 'javax.security.auth.Subject'
   * @param var1 original type: 'java.security.PrivilegedExceptionAction'
   * @param var2 original type: 'java.security.AccessControlContext'
   * @return original return type: 'java.lang.Object'
   */
  public static doAsPrivileged(
    var0: SubjectClass | null,
    var1: java_security_PrivilegedExceptionAction | null,
    var2: java_security_AccessControlContext | null,
  ): Promise<BasicOrJavaType | null>;
  /**
   * @param var0 original type: 'javax.security.auth.Subject'
   * @param var1 original type: 'java.security.PrivilegedExceptionAction'
   * @param var2 original type: 'java.security.AccessControlContext'
   * @return original return type: 'java.lang.Object'
   */
  public static doAsPrivilegedSync(
    var0: SubjectClass | null,
    var1: java_security_PrivilegedExceptionAction | null,
    var2: java_security_AccessControlContext | null,
  ): BasicOrJavaType | null;
  // ================== Method getPublicCredentials ==================
  /**
   * @return original return type: 'java.util.Set'
   */
  public getPublicCredentials(): Promise<java_util_Set | null>;
  // ================== Method getPublicCredentials ==================
  /**
   * @return original return type: 'java.util.Set'
   */
  public getPublicCredentialsSync(): java_util_Set | null;
  /**
   * @param var0 original type: 'java.lang.Class'
   * @return original return type: 'java.util.Set'
   */
  public getPublicCredentials(var0: java_lang_Class | null): Promise<java_util_Set | null>;
  /**
   * @param var0 original type: 'java.lang.Class'
   * @return original return type: 'java.util.Set'
   */
  public getPublicCredentialsSync(var0: java_lang_Class | null): java_util_Set | null;
  // ================== Method getPrivateCredentials ==================
  /**
   * @param var0 original type: 'java.lang.Class'
   * @return original return type: 'java.util.Set'
   */
  public getPrivateCredentials(var0: java_lang_Class | null): Promise<java_util_Set | null>;
  // ================== Method getPrivateCredentials ==================
  /**
   * @param var0 original type: 'java.lang.Class'
   * @return original return type: 'java.util.Set'
   */
  public getPrivateCredentialsSync(var0: java_lang_Class | null): java_util_Set | null;
  /**
   * @return original return type: 'java.util.Set'
   */
  public getPrivateCredentials(): Promise<java_util_Set | null>;
  /**
   * @return original return type: 'java.util.Set'
   */
  public getPrivateCredentialsSync(): java_util_Set | null;
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
  // ================== Method getPrincipals ==================
  /**
   * @param var0 original type: 'java.lang.Class'
   * @return original return type: 'java.util.Set'
   */
  public getPrincipals(var0: java_lang_Class | null): Promise<java_util_Set | null>;
  // ================== Method getPrincipals ==================
  /**
   * @param var0 original type: 'java.lang.Class'
   * @return original return type: 'java.util.Set'
   */
  public getPrincipalsSync(var0: java_lang_Class | null): java_util_Set | null;
  /**
   * @return original return type: 'java.util.Set'
   */
  public getPrincipals(): Promise<java_util_Set | null>;
  /**
   * @return original return type: 'java.util.Set'
   */
  public getPrincipalsSync(): java_util_Set | null;
  // ================== Method setReadOnly ==================
  /**
   * @return original return type: 'void'
   */
  public setReadOnly(): Promise<void>;
  // ================== Method setReadOnly ==================
  /**
   * @return original return type: 'void'
   */
  public setReadOnlySync(): void;
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
   * @return original return type: 'javax.security.auth.Subject'
   */
  public static newInstance(): Promise<Subject>;
  /**
   * @param var0 original type: 'boolean'
   * @param var1 original type: 'java.util.Set'
   * @param var2 original type: 'java.util.Set'
   * @param var3 original type: 'java.util.Set'
   * @return original return type: 'javax.security.auth.Subject'
   */
  public static newInstance(
    var0: java_lang_Boolean | boolean,
    var1: java_util_Set | null,
    var2: java_util_Set | null,
    var3: java_util_Set | null,
  ): Promise<Subject>;
  // ================== Constructors ==================
  public constructor();
  /**
   * @param var0 original type: 'boolean'
   * @param var1 original type: 'java.util.Set'
   * @param var2 original type: 'java.util.Set'
   * @param var3 original type: 'java.util.Set'
   */
  public constructor(
    var0: java_lang_Boolean | boolean,
    var1: java_util_Set | null,
    var2: java_util_Set | null,
    var3: java_util_Set | null,
  );
}

/**
 * Class javax.security.auth.Subject.
 *
 * This actually imports the java class for further use.
 * The class SubjectClass only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export class Subject extends importClass<typeof SubjectClass>('javax.security.auth.Subject') {}
export default Subject;
