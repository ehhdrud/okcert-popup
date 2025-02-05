import { importClass, JavaClass } from "java-bridge";
import { Runnable as java_lang_Runnable } from "./../../lang/Runnable";
import { Iterator as java_util_Iterator } from "./../Iterator";
import { Spliterator as java_util_Spliterator } from "./../Spliterator";

/**
 * This class just defines types, you should import BaseStream instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class BaseStreamClass extends JavaClass {
    // ================== Method isParallel ==================
    /**
     * @return original return type: 'boolean'
     */
    public isParallel(): Promise<boolean>;
    // ================== Method isParallel ==================
    /**
     * @return original return type: 'boolean'
     */
    public isParallelSync(): boolean;
    // ================== Method onClose ==================
    /**
     * @param var0 original type: 'java.lang.Runnable'
     * @return original return type: 'java.util.stream.BaseStream'
     */
    public onClose(var0: java_lang_Runnable | null): Promise<BaseStream | null>;
    // ================== Method onClose ==================
    /**
     * @param var0 original type: 'java.lang.Runnable'
     * @return original return type: 'java.util.stream.BaseStream'
     */
    public onCloseSync(var0: java_lang_Runnable | null): BaseStream | null;
    // ================== Method sequential ==================
    /**
     * @return original return type: 'java.util.stream.BaseStream'
     */
    public sequential(): Promise<BaseStream | null>;
    // ================== Method sequential ==================
    /**
     * @return original return type: 'java.util.stream.BaseStream'
     */
    public sequentialSync(): BaseStream | null;
    // ================== Method unordered ==================
    /**
     * @return original return type: 'java.util.stream.BaseStream'
     */
    public unordered(): Promise<BaseStream | null>;
    // ================== Method unordered ==================
    /**
     * @return original return type: 'java.util.stream.BaseStream'
     */
    public unorderedSync(): BaseStream | null;
    // ================== Method iterator ==================
    /**
     * @return original return type: 'java.util.Iterator'
     */
    public iterator(): Promise<java_util_Iterator | null>;
    // ================== Method iterator ==================
    /**
     * @return original return type: 'java.util.Iterator'
     */
    public iteratorSync(): java_util_Iterator | null;
    // ================== Method spliterator ==================
    /**
     * @return original return type: 'java.util.Spliterator'
     */
    public spliterator(): Promise<java_util_Spliterator | null>;
    // ================== Method spliterator ==================
    /**
     * @return original return type: 'java.util.Spliterator'
     */
    public spliteratorSync(): java_util_Spliterator | null;
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
    // ================== Method parallel ==================
    /**
     * @return original return type: 'java.util.stream.BaseStream'
     */
    public parallel(): Promise<BaseStream | null>;
    // ================== Method parallel ==================
    /**
     * @return original return type: 'java.util.stream.BaseStream'
     */
    public parallelSync(): BaseStream | null;
}

/**
 * Class java.util.stream.BaseStream.
 *
 * This actually imports the java class for further use.
 * The class BaseStreamClass only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export class BaseStream extends importClass<typeof BaseStreamClass>("java.util.stream.BaseStream") {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor() {
        super();
    }
}
export default BaseStream;