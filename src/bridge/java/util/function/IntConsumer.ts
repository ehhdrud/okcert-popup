import { importClass, JavaClass } from "java-bridge";
import { Integer as java_lang_Integer } from "./../../lang/Integer";

/**
 * This class just defines types, you should import IntConsumer instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class IntConsumerClass extends JavaClass {
    // ================== Method andThen ==================
    /**
     * @param var0 original type: 'java.util.function.IntConsumer'
     * @return original return type: 'java.util.function.IntConsumer'
     */
    public andThen(var0: IntConsumerClass | null): Promise<IntConsumer | null>;
    // ================== Method andThen ==================
    /**
     * @param var0 original type: 'java.util.function.IntConsumer'
     * @return original return type: 'java.util.function.IntConsumer'
     */
    public andThenSync(var0: IntConsumerClass | null): IntConsumer | null;
    // ================== Method accept ==================
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'void'
     */
    public accept(var0: java_lang_Integer | number): Promise<void>;
    // ================== Method accept ==================
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'void'
     */
    public acceptSync(var0: java_lang_Integer | number): void;
}

/**
 * Class java.util.function.IntConsumer.
 *
 * This actually imports the java class for further use.
 * The class IntConsumerClass only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export class IntConsumer extends importClass<typeof IntConsumerClass>("java.util.function.IntConsumer") {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor() {
        super();
    }
}
export default IntConsumer;