import { importClass, JavaClass, BasicOrJavaType } from 'java-bridge';
import { Map as java_util_Map } from './../util/Map';
import { Temporal as java_time_temporal_Temporal } from './temporal/Temporal';
import { Integer as java_lang_Integer } from './../lang/Integer';
import { ZoneRules as java_time_zone_ZoneRules } from './zone/ZoneRules';
import { TemporalAccessor as java_time_temporal_TemporalAccessor } from './temporal/TemporalAccessor';
import { ZoneId as java_time_ZoneId } from './ZoneId';
import { TemporalField as java_time_temporal_TemporalField } from './temporal/TemporalField';
import { TemporalQuery as java_time_temporal_TemporalQuery } from './temporal/TemporalQuery';
import { ValueRange as java_time_temporal_ValueRange } from './temporal/ValueRange';
import { Set as java_util_Set } from './../util/Set';
import { TextStyle as java_time_format_TextStyle } from './format/TextStyle';
import { Locale as java_util_Locale } from './../util/Locale';
import { Long as java_lang_Long } from './../lang/Long';
import { Class as java_lang_Class } from './../lang/Class';

/**
 * This class just defines types, you should import ZoneOffset instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class ZoneOffsetClass extends JavaClass {
  // ================== Field UTC ==================
  /**
   * Original type: 'java.time.ZoneOffset'
   */
  public static readonly UTC: ZoneOffsetClass | null;
  // ================== Field MIN ==================
  /**
   * Original type: 'java.time.ZoneOffset'
   */
  public static readonly MIN: ZoneOffsetClass | null;
  // ================== Field MAX ==================
  /**
   * Original type: 'java.time.ZoneOffset'
   */
  public static readonly MAX: ZoneOffsetClass | null;
  // ================== Field SHORT_IDS ==================
  /**
   * Original type: 'java.util.Map'
   */
  public static readonly SHORT_IDS: java_util_Map | null;
  // ================== Method adjustInto ==================
  /**
   * @param var0 original type: 'java.time.temporal.Temporal'
   * @return original return type: 'java.time.temporal.Temporal'
   */
  public adjustInto(var0: java_time_temporal_Temporal | null): Promise<java_time_temporal_Temporal | null>;
  // ================== Method adjustInto ==================
  /**
   * @param var0 original type: 'java.time.temporal.Temporal'
   * @return original return type: 'java.time.temporal.Temporal'
   */
  public adjustIntoSync(var0: java_time_temporal_Temporal | null): java_time_temporal_Temporal | null;
  // ================== Method ofHours ==================
  /**
   * @param var0 original type: 'int'
   * @return original return type: 'java.time.ZoneOffset'
   */
  public static ofHours(var0: java_lang_Integer | number): Promise<ZoneOffset | null>;
  // ================== Method ofHours ==================
  /**
   * @param var0 original type: 'int'
   * @return original return type: 'java.time.ZoneOffset'
   */
  public static ofHoursSync(var0: java_lang_Integer | number): ZoneOffset | null;
  // ================== Method ofHoursMinutes ==================
  /**
   * @param var0 original type: 'int'
   * @param var1 original type: 'int'
   * @return original return type: 'java.time.ZoneOffset'
   */
  public static ofHoursMinutes(
    var0: java_lang_Integer | number,
    var1: java_lang_Integer | number,
  ): Promise<ZoneOffset | null>;
  // ================== Method ofHoursMinutes ==================
  /**
   * @param var0 original type: 'int'
   * @param var1 original type: 'int'
   * @return original return type: 'java.time.ZoneOffset'
   */
  public static ofHoursMinutesSync(
    var0: java_lang_Integer | number,
    var1: java_lang_Integer | number,
  ): ZoneOffset | null;
  // ================== Method ofHoursMinutesSeconds ==================
  /**
   * @param var0 original type: 'int'
   * @param var1 original type: 'int'
   * @param var2 original type: 'int'
   * @return original return type: 'java.time.ZoneOffset'
   */
  public static ofHoursMinutesSeconds(
    var0: java_lang_Integer | number,
    var1: java_lang_Integer | number,
    var2: java_lang_Integer | number,
  ): Promise<ZoneOffset | null>;
  // ================== Method ofHoursMinutesSeconds ==================
  /**
   * @param var0 original type: 'int'
   * @param var1 original type: 'int'
   * @param var2 original type: 'int'
   * @return original return type: 'java.time.ZoneOffset'
   */
  public static ofHoursMinutesSecondsSync(
    var0: java_lang_Integer | number,
    var1: java_lang_Integer | number,
    var2: java_lang_Integer | number,
  ): ZoneOffset | null;
  // ================== Method ofTotalSeconds ==================
  /**
   * @param var0 original type: 'int'
   * @return original return type: 'java.time.ZoneOffset'
   */
  public static ofTotalSeconds(var0: java_lang_Integer | number): Promise<ZoneOffset | null>;
  // ================== Method ofTotalSeconds ==================
  /**
   * @param var0 original type: 'int'
   * @return original return type: 'java.time.ZoneOffset'
   */
  public static ofTotalSecondsSync(var0: java_lang_Integer | number): ZoneOffset | null;
  // ================== Method getTotalSeconds ==================
  /**
   * @return original return type: 'int'
   */
  public getTotalSeconds(): Promise<number>;
  // ================== Method getTotalSeconds ==================
  /**
   * @return original return type: 'int'
   */
  public getTotalSecondsSync(): number;
  // ================== Method getRules ==================
  /**
   * @return original return type: 'java.time.zone.ZoneRules'
   */
  public getRules(): Promise<java_time_zone_ZoneRules | null>;
  // ================== Method getRules ==================
  /**
   * @return original return type: 'java.time.zone.ZoneRules'
   */
  public getRulesSync(): java_time_zone_ZoneRules | null;
  // ================== Method from ==================
  /**
   * @param var0 original type: 'java.time.temporal.TemporalAccessor'
   * @return original return type: 'java.time.ZoneOffset'
   */
  public static from(var0: java_time_temporal_TemporalAccessor | null): Promise<ZoneOffset | null>;
  // ================== Method from ==================
  /**
   * @param var0 original type: 'java.time.temporal.TemporalAccessor'
   * @return original return type: 'java.time.ZoneOffset'
   */
  public static fromSync(var0: java_time_temporal_TemporalAccessor | null): ZoneOffset | null;
  /**
   * @param var0 original type: 'java.time.temporal.TemporalAccessor'
   * @return original return type: 'java.time.ZoneId'
   */
  public static from(var0: java_time_temporal_TemporalAccessor | null): Promise<java_time_ZoneId | null>;
  /**
   * @param var0 original type: 'java.time.temporal.TemporalAccessor'
   * @return original return type: 'java.time.ZoneId'
   */
  public static fromSync(var0: java_time_temporal_TemporalAccessor | null): java_time_ZoneId | null;
  // ================== Method get ==================
  /**
   * @param var0 original type: 'java.time.temporal.TemporalField'
   * @return original return type: 'int'
   */
  public get(var0: java_time_temporal_TemporalField | null): Promise<number>;
  // ================== Method get ==================
  /**
   * @param var0 original type: 'java.time.temporal.TemporalField'
   * @return original return type: 'int'
   */
  public getSync(var0: java_time_temporal_TemporalField | null): number;
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
   * @param var0 original type: 'java.time.ZoneOffset'
   * @return original return type: 'int'
   */
  public compareTo(var0: ZoneOffsetClass | null): Promise<number>;
  /**
   * @param var0 original type: 'java.time.ZoneOffset'
   * @return original return type: 'int'
   */
  public compareToSync(var0: ZoneOffsetClass | null): number;
  // ================== Method getLong ==================
  /**
   * @param var0 original type: 'java.time.temporal.TemporalField'
   * @return original return type: 'long'
   */
  public getLong(var0: java_time_temporal_TemporalField | null): Promise<number>;
  // ================== Method getLong ==================
  /**
   * @param var0 original type: 'java.time.temporal.TemporalField'
   * @return original return type: 'long'
   */
  public getLongSync(var0: java_time_temporal_TemporalField | null): number;
  // ================== Method getId ==================
  /**
   * @return original return type: 'java.lang.String'
   */
  public getId(): Promise<string | null>;
  // ================== Method getId ==================
  /**
   * @return original return type: 'java.lang.String'
   */
  public getIdSync(): string | null;
  // ================== Method query ==================
  /**
   * @param var0 original type: 'java.time.temporal.TemporalQuery'
   * @return original return type: 'java.lang.Object'
   */
  public query(var0: java_time_temporal_TemporalQuery | null): Promise<BasicOrJavaType | null>;
  // ================== Method query ==================
  /**
   * @param var0 original type: 'java.time.temporal.TemporalQuery'
   * @return original return type: 'java.lang.Object'
   */
  public querySync(var0: java_time_temporal_TemporalQuery | null): BasicOrJavaType | null;
  // ================== Method of ==================
  /**
   * @param var0 original type: 'java.lang.String'
   * @return original return type: 'java.time.ZoneOffset'
   */
  public static of(var0: string | null): Promise<ZoneOffset | null>;
  // ================== Method of ==================
  /**
   * @param var0 original type: 'java.lang.String'
   * @return original return type: 'java.time.ZoneOffset'
   */
  public static ofSync(var0: string | null): ZoneOffset | null;
  /**
   * @param var0 original type: 'java.lang.String'
   * @param var1 original type: 'java.util.Map'
   * @return original return type: 'java.time.ZoneId'
   */
  public static of(var0: string | null, var1: java_util_Map | null): Promise<java_time_ZoneId | null>;
  /**
   * @param var0 original type: 'java.lang.String'
   * @param var1 original type: 'java.util.Map'
   * @return original return type: 'java.time.ZoneId'
   */
  public static ofSync(var0: string | null, var1: java_util_Map | null): java_time_ZoneId | null;
  /**
   * @param var0 original type: 'java.lang.String'
   * @return original return type: 'java.time.ZoneId'
   */
  public static of(var0: string | null): Promise<java_time_ZoneId | null>;
  /**
   * @param var0 original type: 'java.lang.String'
   * @return original return type: 'java.time.ZoneId'
   */
  public static ofSync(var0: string | null): java_time_ZoneId | null;
  // ================== Method isSupported ==================
  /**
   * @param var0 original type: 'java.time.temporal.TemporalField'
   * @return original return type: 'boolean'
   */
  public isSupported(var0: java_time_temporal_TemporalField | null): Promise<boolean>;
  // ================== Method isSupported ==================
  /**
   * @param var0 original type: 'java.time.temporal.TemporalField'
   * @return original return type: 'boolean'
   */
  public isSupportedSync(var0: java_time_temporal_TemporalField | null): boolean;
  // ================== Method range ==================
  /**
   * @param var0 original type: 'java.time.temporal.TemporalField'
   * @return original return type: 'java.time.temporal.ValueRange'
   */
  public range(var0: java_time_temporal_TemporalField | null): Promise<java_time_temporal_ValueRange | null>;
  // ================== Method range ==================
  /**
   * @param var0 original type: 'java.time.temporal.TemporalField'
   * @return original return type: 'java.time.temporal.ValueRange'
   */
  public rangeSync(var0: java_time_temporal_TemporalField | null): java_time_temporal_ValueRange | null;
  // ================== Method systemDefault ==================
  /**
   * @return original return type: 'java.time.ZoneId'
   */
  public static systemDefault(): Promise<java_time_ZoneId | null>;
  // ================== Method systemDefault ==================
  /**
   * @return original return type: 'java.time.ZoneId'
   */
  public static systemDefaultSync(): java_time_ZoneId | null;
  // ================== Method getAvailableZoneIds ==================
  /**
   * @return original return type: 'java.util.Set'
   */
  public static getAvailableZoneIds(): Promise<java_util_Set | null>;
  // ================== Method getAvailableZoneIds ==================
  /**
   * @return original return type: 'java.util.Set'
   */
  public static getAvailableZoneIdsSync(): java_util_Set | null;
  // ================== Method ofOffset ==================
  /**
   * @param var0 original type: 'java.lang.String'
   * @param var1 original type: 'java.time.ZoneOffset'
   * @return original return type: 'java.time.ZoneId'
   */
  public static ofOffset(var0: string | null, var1: ZoneOffsetClass | null): Promise<java_time_ZoneId | null>;
  // ================== Method ofOffset ==================
  /**
   * @param var0 original type: 'java.lang.String'
   * @param var1 original type: 'java.time.ZoneOffset'
   * @return original return type: 'java.time.ZoneId'
   */
  public static ofOffsetSync(var0: string | null, var1: ZoneOffsetClass | null): java_time_ZoneId | null;
  // ================== Method normalized ==================
  /**
   * @return original return type: 'java.time.ZoneId'
   */
  public normalized(): Promise<java_time_ZoneId | null>;
  // ================== Method normalized ==================
  /**
   * @return original return type: 'java.time.ZoneId'
   */
  public normalizedSync(): java_time_ZoneId | null;
  // ================== Method getDisplayName ==================
  /**
   * @param var0 original type: 'java.time.format.TextStyle'
   * @param var1 original type: 'java.util.Locale'
   * @return original return type: 'java.lang.String'
   */
  public getDisplayName(var0: java_time_format_TextStyle | null, var1: java_util_Locale | null): Promise<string | null>;
  // ================== Method getDisplayName ==================
  /**
   * @param var0 original type: 'java.time.format.TextStyle'
   * @param var1 original type: 'java.util.Locale'
   * @return original return type: 'java.lang.String'
   */
  public getDisplayNameSync(var0: java_time_format_TextStyle | null, var1: java_util_Locale | null): string | null;
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
 * Class java.time.ZoneOffset.
 *
 * This actually imports the java class for further use.
 * The class ZoneOffsetClass only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export class ZoneOffset extends importClass<typeof ZoneOffsetClass>('java.time.ZoneOffset') {}
export default ZoneOffset;
