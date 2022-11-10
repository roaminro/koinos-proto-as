import { Writer, Reader } from "as-proto";

export namespace descriptor {
  export class FileDescriptorSet {
    static encode(message: FileDescriptorSet, writer: Writer): void {
      const unique_name_file = message.file;
      for (let i = 0; i < unique_name_file.length; ++i) {
        writer.uint32(10);
        writer.fork();
        FileDescriptorProto.encode(unique_name_file[i], writer);
        writer.ldelim();
      }
    }

    static decode(reader: Reader, length: i32): FileDescriptorSet {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new FileDescriptorSet();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.file.push(
              FileDescriptorProto.decode(reader, reader.uint32())
            );
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    file: Array<FileDescriptorProto>;

    constructor(file: Array<FileDescriptorProto> = []) {
      this.file = file;
    }
  }

  export class FileDescriptorProto {
    static encode(message: FileDescriptorProto, writer: Writer): void {
      if (message.name.length != 0) {
        writer.uint32(10);
        writer.string(message.name);
      }

      if (message.package.length != 0) {
        writer.uint32(18);
        writer.string(message.package);
      }

      const unique_name_dependency = message.dependency;
      if (unique_name_dependency.length !== 0) {
        for (let i = 0; i < unique_name_dependency.length; ++i) {
          writer.uint32(26);
          writer.string(unique_name_dependency[i]);
        }
      }

      const unique_name_public_dependency = message.public_dependency;
      if (unique_name_public_dependency.length !== 0) {
        for (let i = 0; i < unique_name_public_dependency.length; ++i) {
          writer.uint32(80);
          writer.int32(unique_name_public_dependency[i]);
        }
      }

      const unique_name_weak_dependency = message.weak_dependency;
      if (unique_name_weak_dependency.length !== 0) {
        for (let i = 0; i < unique_name_weak_dependency.length; ++i) {
          writer.uint32(88);
          writer.int32(unique_name_weak_dependency[i]);
        }
      }

      const unique_name_message_type = message.message_type;
      for (let i = 0; i < unique_name_message_type.length; ++i) {
        writer.uint32(34);
        writer.fork();
        DescriptorProto.encode(unique_name_message_type[i], writer);
        writer.ldelim();
      }

      const unique_name_enum_type = message.enum_type;
      for (let i = 0; i < unique_name_enum_type.length; ++i) {
        writer.uint32(42);
        writer.fork();
        EnumDescriptorProto.encode(unique_name_enum_type[i], writer);
        writer.ldelim();
      }

      const unique_name_service = message.service;
      for (let i = 0; i < unique_name_service.length; ++i) {
        writer.uint32(50);
        writer.fork();
        ServiceDescriptorProto.encode(unique_name_service[i], writer);
        writer.ldelim();
      }

      const unique_name_extension = message.extension;
      for (let i = 0; i < unique_name_extension.length; ++i) {
        writer.uint32(58);
        writer.fork();
        FieldDescriptorProto.encode(unique_name_extension[i], writer);
        writer.ldelim();
      }

      const unique_name_options = message.options;
      if (unique_name_options !== null) {
        writer.uint32(66);
        writer.fork();
        FileOptions.encode(unique_name_options, writer);
        writer.ldelim();
      }

      const unique_name_source_code_info = message.source_code_info;
      if (unique_name_source_code_info !== null) {
        writer.uint32(74);
        writer.fork();
        SourceCodeInfo.encode(unique_name_source_code_info, writer);
        writer.ldelim();
      }

      if (message.syntax.length != 0) {
        writer.uint32(98);
        writer.string(message.syntax);
      }
    }

    static decode(reader: Reader, length: i32): FileDescriptorProto {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new FileDescriptorProto();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.name = reader.string();
            break;

          case 2:
            message.package = reader.string();
            break;

          case 3:
            message.dependency.push(reader.string());
            break;

          case 10:
            message.public_dependency.push(reader.int32());
            break;

          case 11:
            message.weak_dependency.push(reader.int32());
            break;

          case 4:
            message.message_type.push(
              DescriptorProto.decode(reader, reader.uint32())
            );
            break;

          case 5:
            message.enum_type.push(
              EnumDescriptorProto.decode(reader, reader.uint32())
            );
            break;

          case 6:
            message.service.push(
              ServiceDescriptorProto.decode(reader, reader.uint32())
            );
            break;

          case 7:
            message.extension.push(
              FieldDescriptorProto.decode(reader, reader.uint32())
            );
            break;

          case 8:
            message.options = FileOptions.decode(reader, reader.uint32());
            break;

          case 9:
            message.source_code_info = SourceCodeInfo.decode(
              reader,
              reader.uint32()
            );
            break;

          case 12:
            message.syntax = reader.string();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    name: string;
    package: string;
    dependency: Array<string>;
    public_dependency: Array<i32>;
    weak_dependency: Array<i32>;
    message_type: Array<DescriptorProto>;
    enum_type: Array<EnumDescriptorProto>;
    service: Array<ServiceDescriptorProto>;
    extension: Array<FieldDescriptorProto>;
    options: FileOptions | null;
    source_code_info: SourceCodeInfo | null;
    syntax: string;

    constructor(
      name: string = "",
      package: string = "",
      dependency: Array<string> = [],
      public_dependency: Array<i32> = [],
      weak_dependency: Array<i32> = [],
      message_type: Array<DescriptorProto> = [],
      enum_type: Array<EnumDescriptorProto> = [],
      service: Array<ServiceDescriptorProto> = [],
      extension: Array<FieldDescriptorProto> = [],
      options: FileOptions | null = null,
      source_code_info: SourceCodeInfo | null = null,
      syntax: string = ""
    ) {
      this.name = name;
      this.package = package;
      this.dependency = dependency;
      this.public_dependency = public_dependency;
      this.weak_dependency = weak_dependency;
      this.message_type = message_type;
      this.enum_type = enum_type;
      this.service = service;
      this.extension = extension;
      this.options = options;
      this.source_code_info = source_code_info;
      this.syntax = syntax;
    }
  }

  export class DescriptorProto {
    static encode(message: DescriptorProto, writer: Writer): void {
      if (message.name.length != 0) {
        writer.uint32(10);
        writer.string(message.name);
      }

      const unique_name_field = message.field;
      for (let i = 0; i < unique_name_field.length; ++i) {
        writer.uint32(18);
        writer.fork();
        FieldDescriptorProto.encode(unique_name_field[i], writer);
        writer.ldelim();
      }

      const unique_name_extension = message.extension;
      for (let i = 0; i < unique_name_extension.length; ++i) {
        writer.uint32(50);
        writer.fork();
        FieldDescriptorProto.encode(unique_name_extension[i], writer);
        writer.ldelim();
      }

      const unique_name_nested_type = message.nested_type;
      for (let i = 0; i < unique_name_nested_type.length; ++i) {
        writer.uint32(26);
        writer.fork();
        DescriptorProto.encode(unique_name_nested_type[i], writer);
        writer.ldelim();
      }

      const unique_name_enum_type = message.enum_type;
      for (let i = 0; i < unique_name_enum_type.length; ++i) {
        writer.uint32(34);
        writer.fork();
        EnumDescriptorProto.encode(unique_name_enum_type[i], writer);
        writer.ldelim();
      }

      const unique_name_extension_range = message.extension_range;
      for (let i = 0; i < unique_name_extension_range.length; ++i) {
        writer.uint32(42);
        writer.fork();
        ExtensionRange.encode(unique_name_extension_range[i], writer);
        writer.ldelim();
      }

      const unique_name_oneof_decl = message.oneof_decl;
      for (let i = 0; i < unique_name_oneof_decl.length; ++i) {
        writer.uint32(66);
        writer.fork();
        OneofDescriptorProto.encode(unique_name_oneof_decl[i], writer);
        writer.ldelim();
      }

      const unique_name_options = message.options;
      if (unique_name_options !== null) {
        writer.uint32(58);
        writer.fork();
        MessageOptions.encode(unique_name_options, writer);
        writer.ldelim();
      }

      const unique_name_reserved_range = message.reserved_range;
      for (let i = 0; i < unique_name_reserved_range.length; ++i) {
        writer.uint32(74);
        writer.fork();
        ReservedRange.encode(unique_name_reserved_range[i], writer);
        writer.ldelim();
      }

      const unique_name_reserved_name = message.reserved_name;
      if (unique_name_reserved_name.length !== 0) {
        for (let i = 0; i < unique_name_reserved_name.length; ++i) {
          writer.uint32(82);
          writer.string(unique_name_reserved_name[i]);
        }
      }
    }

    static decode(reader: Reader, length: i32): DescriptorProto {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new DescriptorProto();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.name = reader.string();
            break;

          case 2:
            message.field.push(
              FieldDescriptorProto.decode(reader, reader.uint32())
            );
            break;

          case 6:
            message.extension.push(
              FieldDescriptorProto.decode(reader, reader.uint32())
            );
            break;

          case 3:
            message.nested_type.push(
              DescriptorProto.decode(reader, reader.uint32())
            );
            break;

          case 4:
            message.enum_type.push(
              EnumDescriptorProto.decode(reader, reader.uint32())
            );
            break;

          case 5:
            message.extension_range.push(
              ExtensionRange.decode(reader, reader.uint32())
            );
            break;

          case 8:
            message.oneof_decl.push(
              OneofDescriptorProto.decode(reader, reader.uint32())
            );
            break;

          case 7:
            message.options = MessageOptions.decode(reader, reader.uint32());
            break;

          case 9:
            message.reserved_range.push(
              ReservedRange.decode(reader, reader.uint32())
            );
            break;

          case 10:
            message.reserved_name.push(reader.string());
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    name: string;
    field: Array<FieldDescriptorProto>;
    extension: Array<FieldDescriptorProto>;
    nested_type: Array<DescriptorProto>;
    enum_type: Array<EnumDescriptorProto>;
    extension_range: Array<ExtensionRange>;
    oneof_decl: Array<OneofDescriptorProto>;
    options: MessageOptions | null;
    reserved_range: Array<ReservedRange>;
    reserved_name: Array<string>;

    constructor(
      name: string = "",
      field: Array<FieldDescriptorProto> = [],
      extension: Array<FieldDescriptorProto> = [],
      nested_type: Array<DescriptorProto> = [],
      enum_type: Array<EnumDescriptorProto> = [],
      extension_range: Array<ExtensionRange> = [],
      oneof_decl: Array<OneofDescriptorProto> = [],
      options: MessageOptions | null = null,
      reserved_range: Array<ReservedRange> = [],
      reserved_name: Array<string> = []
    ) {
      this.name = name;
      this.field = field;
      this.extension = extension;
      this.nested_type = nested_type;
      this.enum_type = enum_type;
      this.extension_range = extension_range;
      this.oneof_decl = oneof_decl;
      this.options = options;
      this.reserved_range = reserved_range;
      this.reserved_name = reserved_name;
    }
  }

  export namespace DescriptorProto {
    export class ExtensionRange {
      static encode(message: ExtensionRange, writer: Writer): void {
        if (message.start != 0) {
          writer.uint32(8);
          writer.int32(message.start);
        }

        if (message.end != 0) {
          writer.uint32(16);
          writer.int32(message.end);
        }

        const unique_name_options = message.options;
        if (unique_name_options !== null) {
          writer.uint32(26);
          writer.fork();
          ExtensionRangeOptions.encode(unique_name_options, writer);
          writer.ldelim();
        }
      }

      static decode(reader: Reader, length: i32): ExtensionRange {
        const end: usize = length < 0 ? reader.end : reader.ptr + length;
        const message = new ExtensionRange();

        while (reader.ptr < end) {
          const tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              message.start = reader.int32();
              break;

            case 2:
              message.end = reader.int32();
              break;

            case 3:
              message.options = ExtensionRangeOptions.decode(
                reader,
                reader.uint32()
              );
              break;

            default:
              reader.skipType(tag & 7);
              break;
          }
        }

        return message;
      }

      start: i32;
      end: i32;
      options: ExtensionRangeOptions | null;

      constructor(
        start: i32 = 0,
        end: i32 = 0,
        options: ExtensionRangeOptions | null = null
      ) {
        this.start = start;
        this.end = end;
        this.options = options;
      }
    }

    @unmanaged
    export class ReservedRange {
      static encode(message: ReservedRange, writer: Writer): void {
        if (message.start != 0) {
          writer.uint32(8);
          writer.int32(message.start);
        }

        if (message.end != 0) {
          writer.uint32(16);
          writer.int32(message.end);
        }
      }

      static decode(reader: Reader, length: i32): ReservedRange {
        const end: usize = length < 0 ? reader.end : reader.ptr + length;
        const message = new ReservedRange();

        while (reader.ptr < end) {
          const tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              message.start = reader.int32();
              break;

            case 2:
              message.end = reader.int32();
              break;

            default:
              reader.skipType(tag & 7);
              break;
          }
        }

        return message;
      }

      start: i32;
      end: i32;

      constructor(start: i32 = 0, end: i32 = 0) {
        this.start = start;
        this.end = end;
      }
    }
  }

  export class ExtensionRangeOptions {
    static encode(message: ExtensionRangeOptions, writer: Writer): void {
      const unique_name_uninterpreted_option = message.uninterpreted_option;
      for (let i = 0; i < unique_name_uninterpreted_option.length; ++i) {
        writer.uint32(7994);
        writer.fork();
        UninterpretedOption.encode(unique_name_uninterpreted_option[i], writer);
        writer.ldelim();
      }
    }

    static decode(reader: Reader, length: i32): ExtensionRangeOptions {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new ExtensionRangeOptions();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 999:
            message.uninterpreted_option.push(
              UninterpretedOption.decode(reader, reader.uint32())
            );
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    uninterpreted_option: Array<UninterpretedOption>;

    constructor(uninterpreted_option: Array<UninterpretedOption> = []) {
      this.uninterpreted_option = uninterpreted_option;
    }
  }

  export class FieldDescriptorProto {
    static encode(message: FieldDescriptorProto, writer: Writer): void {
      if (message.name.length != 0) {
        writer.uint32(10);
        writer.string(message.name);
      }

      if (message.number != 0) {
        writer.uint32(24);
        writer.int32(message.number);
      }

      if (message.label != 0) {
        writer.uint32(32);
        writer.int32(message.label);
      }

      if (message.type != 0) {
        writer.uint32(40);
        writer.int32(message.type);
      }

      if (message.type_name.length != 0) {
        writer.uint32(50);
        writer.string(message.type_name);
      }

      if (message.extendee.length != 0) {
        writer.uint32(18);
        writer.string(message.extendee);
      }

      if (message.default_value.length != 0) {
        writer.uint32(58);
        writer.string(message.default_value);
      }

      if (message.oneof_index != 0) {
        writer.uint32(72);
        writer.int32(message.oneof_index);
      }

      if (message.json_name.length != 0) {
        writer.uint32(82);
        writer.string(message.json_name);
      }

      const unique_name_options = message.options;
      if (unique_name_options !== null) {
        writer.uint32(66);
        writer.fork();
        FieldOptions.encode(unique_name_options, writer);
        writer.ldelim();
      }

      if (message.proto3_optional != false) {
        writer.uint32(136);
        writer.bool(message.proto3_optional);
      }
    }

    static decode(reader: Reader, length: i32): FieldDescriptorProto {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new FieldDescriptorProto();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.name = reader.string();
            break;

          case 3:
            message.number = reader.int32();
            break;

          case 4:
            message.label = reader.int32();
            break;

          case 5:
            message.type = reader.int32();
            break;

          case 6:
            message.type_name = reader.string();
            break;

          case 2:
            message.extendee = reader.string();
            break;

          case 7:
            message.default_value = reader.string();
            break;

          case 9:
            message.oneof_index = reader.int32();
            break;

          case 10:
            message.json_name = reader.string();
            break;

          case 8:
            message.options = FieldOptions.decode(reader, reader.uint32());
            break;

          case 17:
            message.proto3_optional = reader.bool();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    name: string;
    number: i32;
    label: Label;
    type: Type;
    type_name: string;
    extendee: string;
    default_value: string;
    oneof_index: i32;
    json_name: string;
    options: FieldOptions | null;
    proto3_optional: bool;

    constructor(
      name: string = "",
      number: i32 = 0,
      label: Label = 0,
      type: Type = 0,
      type_name: string = "",
      extendee: string = "",
      default_value: string = "",
      oneof_index: i32 = 0,
      json_name: string = "",
      options: FieldOptions | null = null,
      proto3_optional: bool = false
    ) {
      this.name = name;
      this.number = number;
      this.label = label;
      this.type = type;
      this.type_name = type_name;
      this.extendee = extendee;
      this.default_value = default_value;
      this.oneof_index = oneof_index;
      this.json_name = json_name;
      this.options = options;
      this.proto3_optional = proto3_optional;
    }
  }

  export namespace FieldDescriptorProto {
    export enum Type {
      TYPE_DOUBLE = 1,
      TYPE_FLOAT = 2,
      TYPE_INT64 = 3,
      TYPE_UINT64 = 4,
      TYPE_INT32 = 5,
      TYPE_FIXED64 = 6,
      TYPE_FIXED32 = 7,
      TYPE_BOOL = 8,
      TYPE_STRING = 9,
      TYPE_GROUP = 10,
      TYPE_MESSAGE = 11,
      TYPE_BYTES = 12,
      TYPE_UINT32 = 13,
      TYPE_ENUM = 14,
      TYPE_SFIXED32 = 15,
      TYPE_SFIXED64 = 16,
      TYPE_SINT32 = 17,
      TYPE_SINT64 = 18,
    }

    export enum Label {
      LABEL_OPTIONAL = 1,
      LABEL_REQUIRED = 2,
      LABEL_REPEATED = 3,
    }
  }

  export class OneofDescriptorProto {
    static encode(message: OneofDescriptorProto, writer: Writer): void {
      if (message.name.length != 0) {
        writer.uint32(10);
        writer.string(message.name);
      }

      const unique_name_options = message.options;
      if (unique_name_options !== null) {
        writer.uint32(18);
        writer.fork();
        OneofOptions.encode(unique_name_options, writer);
        writer.ldelim();
      }
    }

    static decode(reader: Reader, length: i32): OneofDescriptorProto {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new OneofDescriptorProto();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.name = reader.string();
            break;

          case 2:
            message.options = OneofOptions.decode(reader, reader.uint32());
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    name: string;
    options: OneofOptions | null;

    constructor(name: string = "", options: OneofOptions | null = null) {
      this.name = name;
      this.options = options;
    }
  }

  export class EnumDescriptorProto {
    static encode(message: EnumDescriptorProto, writer: Writer): void {
      if (message.name.length != 0) {
        writer.uint32(10);
        writer.string(message.name);
      }

      const unique_name_value = message.value;
      for (let i = 0; i < unique_name_value.length; ++i) {
        writer.uint32(18);
        writer.fork();
        EnumValueDescriptorProto.encode(unique_name_value[i], writer);
        writer.ldelim();
      }

      const unique_name_options = message.options;
      if (unique_name_options !== null) {
        writer.uint32(26);
        writer.fork();
        EnumOptions.encode(unique_name_options, writer);
        writer.ldelim();
      }

      const unique_name_reserved_range = message.reserved_range;
      for (let i = 0; i < unique_name_reserved_range.length; ++i) {
        writer.uint32(34);
        writer.fork();
        EnumReservedRange.encode(unique_name_reserved_range[i], writer);
        writer.ldelim();
      }

      const unique_name_reserved_name = message.reserved_name;
      if (unique_name_reserved_name.length !== 0) {
        for (let i = 0; i < unique_name_reserved_name.length; ++i) {
          writer.uint32(42);
          writer.string(unique_name_reserved_name[i]);
        }
      }
    }

    static decode(reader: Reader, length: i32): EnumDescriptorProto {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new EnumDescriptorProto();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.name = reader.string();
            break;

          case 2:
            message.value.push(
              EnumValueDescriptorProto.decode(reader, reader.uint32())
            );
            break;

          case 3:
            message.options = EnumOptions.decode(reader, reader.uint32());
            break;

          case 4:
            message.reserved_range.push(
              EnumReservedRange.decode(reader, reader.uint32())
            );
            break;

          case 5:
            message.reserved_name.push(reader.string());
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    name: string;
    value: Array<EnumValueDescriptorProto>;
    options: EnumOptions | null;
    reserved_range: Array<EnumReservedRange>;
    reserved_name: Array<string>;

    constructor(
      name: string = "",
      value: Array<EnumValueDescriptorProto> = [],
      options: EnumOptions | null = null,
      reserved_range: Array<EnumReservedRange> = [],
      reserved_name: Array<string> = []
    ) {
      this.name = name;
      this.value = value;
      this.options = options;
      this.reserved_range = reserved_range;
      this.reserved_name = reserved_name;
    }
  }

  export namespace EnumDescriptorProto {
    @unmanaged
    export class EnumReservedRange {
      static encode(message: EnumReservedRange, writer: Writer): void {
        if (message.start != 0) {
          writer.uint32(8);
          writer.int32(message.start);
        }

        if (message.end != 0) {
          writer.uint32(16);
          writer.int32(message.end);
        }
      }

      static decode(reader: Reader, length: i32): EnumReservedRange {
        const end: usize = length < 0 ? reader.end : reader.ptr + length;
        const message = new EnumReservedRange();

        while (reader.ptr < end) {
          const tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              message.start = reader.int32();
              break;

            case 2:
              message.end = reader.int32();
              break;

            default:
              reader.skipType(tag & 7);
              break;
          }
        }

        return message;
      }

      start: i32;
      end: i32;

      constructor(start: i32 = 0, end: i32 = 0) {
        this.start = start;
        this.end = end;
      }
    }
  }

  export class EnumValueDescriptorProto {
    static encode(message: EnumValueDescriptorProto, writer: Writer): void {
      if (message.name.length != 0) {
        writer.uint32(10);
        writer.string(message.name);
      }

      if (message.number != 0) {
        writer.uint32(16);
        writer.int32(message.number);
      }

      const unique_name_options = message.options;
      if (unique_name_options !== null) {
        writer.uint32(26);
        writer.fork();
        EnumValueOptions.encode(unique_name_options, writer);
        writer.ldelim();
      }
    }

    static decode(reader: Reader, length: i32): EnumValueDescriptorProto {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new EnumValueDescriptorProto();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.name = reader.string();
            break;

          case 2:
            message.number = reader.int32();
            break;

          case 3:
            message.options = EnumValueOptions.decode(reader, reader.uint32());
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    name: string;
    number: i32;
    options: EnumValueOptions | null;

    constructor(
      name: string = "",
      number: i32 = 0,
      options: EnumValueOptions | null = null
    ) {
      this.name = name;
      this.number = number;
      this.options = options;
    }
  }

  export class ServiceDescriptorProto {
    static encode(message: ServiceDescriptorProto, writer: Writer): void {
      if (message.name.length != 0) {
        writer.uint32(10);
        writer.string(message.name);
      }

      const unique_name_method = message.method;
      for (let i = 0; i < unique_name_method.length; ++i) {
        writer.uint32(18);
        writer.fork();
        MethodDescriptorProto.encode(unique_name_method[i], writer);
        writer.ldelim();
      }

      const unique_name_options = message.options;
      if (unique_name_options !== null) {
        writer.uint32(26);
        writer.fork();
        ServiceOptions.encode(unique_name_options, writer);
        writer.ldelim();
      }
    }

    static decode(reader: Reader, length: i32): ServiceDescriptorProto {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new ServiceDescriptorProto();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.name = reader.string();
            break;

          case 2:
            message.method.push(
              MethodDescriptorProto.decode(reader, reader.uint32())
            );
            break;

          case 3:
            message.options = ServiceOptions.decode(reader, reader.uint32());
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    name: string;
    method: Array<MethodDescriptorProto>;
    options: ServiceOptions | null;

    constructor(
      name: string = "",
      method: Array<MethodDescriptorProto> = [],
      options: ServiceOptions | null = null
    ) {
      this.name = name;
      this.method = method;
      this.options = options;
    }
  }

  export class MethodDescriptorProto {
    static encode(message: MethodDescriptorProto, writer: Writer): void {
      if (message.name.length != 0) {
        writer.uint32(10);
        writer.string(message.name);
      }

      if (message.input_type.length != 0) {
        writer.uint32(18);
        writer.string(message.input_type);
      }

      if (message.output_type.length != 0) {
        writer.uint32(26);
        writer.string(message.output_type);
      }

      const unique_name_options = message.options;
      if (unique_name_options !== null) {
        writer.uint32(34);
        writer.fork();
        MethodOptions.encode(unique_name_options, writer);
        writer.ldelim();
      }

      if (message.client_streaming != false) {
        writer.uint32(40);
        writer.bool(message.client_streaming);
      }

      if (message.server_streaming != false) {
        writer.uint32(48);
        writer.bool(message.server_streaming);
      }
    }

    static decode(reader: Reader, length: i32): MethodDescriptorProto {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new MethodDescriptorProto();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.name = reader.string();
            break;

          case 2:
            message.input_type = reader.string();
            break;

          case 3:
            message.output_type = reader.string();
            break;

          case 4:
            message.options = MethodOptions.decode(reader, reader.uint32());
            break;

          case 5:
            message.client_streaming = reader.bool();
            break;

          case 6:
            message.server_streaming = reader.bool();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    name: string;
    input_type: string;
    output_type: string;
    options: MethodOptions | null;
    client_streaming: bool;
    server_streaming: bool;

    constructor(
      name: string = "",
      input_type: string = "",
      output_type: string = "",
      options: MethodOptions | null = null,
      client_streaming: bool = false,
      server_streaming: bool = false
    ) {
      this.name = name;
      this.input_type = input_type;
      this.output_type = output_type;
      this.options = options;
      this.client_streaming = client_streaming;
      this.server_streaming = server_streaming;
    }
  }

  export class FileOptions {
    static encode(message: FileOptions, writer: Writer): void {
      if (message.java_package.length != 0) {
        writer.uint32(10);
        writer.string(message.java_package);
      }

      if (message.java_outer_classname.length != 0) {
        writer.uint32(66);
        writer.string(message.java_outer_classname);
      }

      if (message.java_multiple_files != false) {
        writer.uint32(80);
        writer.bool(message.java_multiple_files);
      }

      if (message.java_generate_equals_and_hash != false) {
        writer.uint32(160);
        writer.bool(message.java_generate_equals_and_hash);
      }

      if (message.java_string_check_utf8 != false) {
        writer.uint32(216);
        writer.bool(message.java_string_check_utf8);
      }

      if (message.optimize_for != SPEED) {
        writer.uint32(72);
        writer.int32(message.optimize_for);
      }

      if (message.go_package.length != 0) {
        writer.uint32(90);
        writer.string(message.go_package);
      }

      if (message.cc_generic_services != false) {
        writer.uint32(128);
        writer.bool(message.cc_generic_services);
      }

      if (message.java_generic_services != false) {
        writer.uint32(136);
        writer.bool(message.java_generic_services);
      }

      if (message.py_generic_services != false) {
        writer.uint32(144);
        writer.bool(message.py_generic_services);
      }

      if (message.php_generic_services != false) {
        writer.uint32(336);
        writer.bool(message.php_generic_services);
      }

      if (message.deprecated != false) {
        writer.uint32(184);
        writer.bool(message.deprecated);
      }

      if (message.cc_enable_arenas != true) {
        writer.uint32(248);
        writer.bool(message.cc_enable_arenas);
      }

      if (message.objc_class_prefix.length != 0) {
        writer.uint32(290);
        writer.string(message.objc_class_prefix);
      }

      if (message.csharp_namespace.length != 0) {
        writer.uint32(298);
        writer.string(message.csharp_namespace);
      }

      if (message.swift_prefix.length != 0) {
        writer.uint32(314);
        writer.string(message.swift_prefix);
      }

      if (message.php_class_prefix.length != 0) {
        writer.uint32(322);
        writer.string(message.php_class_prefix);
      }

      if (message.php_namespace.length != 0) {
        writer.uint32(330);
        writer.string(message.php_namespace);
      }

      if (message.php_metadata_namespace.length != 0) {
        writer.uint32(354);
        writer.string(message.php_metadata_namespace);
      }

      if (message.ruby_package.length != 0) {
        writer.uint32(362);
        writer.string(message.ruby_package);
      }

      const unique_name_uninterpreted_option = message.uninterpreted_option;
      for (let i = 0; i < unique_name_uninterpreted_option.length; ++i) {
        writer.uint32(7994);
        writer.fork();
        UninterpretedOption.encode(unique_name_uninterpreted_option[i], writer);
        writer.ldelim();
      }
    }

    static decode(reader: Reader, length: i32): FileOptions {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new FileOptions();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.java_package = reader.string();
            break;

          case 8:
            message.java_outer_classname = reader.string();
            break;

          case 10:
            message.java_multiple_files = reader.bool();
            break;

          case 20:
            message.java_generate_equals_and_hash = reader.bool();
            break;

          case 27:
            message.java_string_check_utf8 = reader.bool();
            break;

          case 9:
            message.optimize_for = reader.int32();
            break;

          case 11:
            message.go_package = reader.string();
            break;

          case 16:
            message.cc_generic_services = reader.bool();
            break;

          case 17:
            message.java_generic_services = reader.bool();
            break;

          case 18:
            message.py_generic_services = reader.bool();
            break;

          case 42:
            message.php_generic_services = reader.bool();
            break;

          case 23:
            message.deprecated = reader.bool();
            break;

          case 31:
            message.cc_enable_arenas = reader.bool();
            break;

          case 36:
            message.objc_class_prefix = reader.string();
            break;

          case 37:
            message.csharp_namespace = reader.string();
            break;

          case 39:
            message.swift_prefix = reader.string();
            break;

          case 40:
            message.php_class_prefix = reader.string();
            break;

          case 41:
            message.php_namespace = reader.string();
            break;

          case 44:
            message.php_metadata_namespace = reader.string();
            break;

          case 45:
            message.ruby_package = reader.string();
            break;

          case 999:
            message.uninterpreted_option.push(
              UninterpretedOption.decode(reader, reader.uint32())
            );
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    java_package: string;
    java_outer_classname: string;
    java_multiple_files: bool;
    java_generate_equals_and_hash: bool;
    java_string_check_utf8: bool;
    optimize_for: OptimizeMode;
    go_package: string;
    cc_generic_services: bool;
    java_generic_services: bool;
    py_generic_services: bool;
    php_generic_services: bool;
    deprecated: bool;
    cc_enable_arenas: bool;
    objc_class_prefix: string;
    csharp_namespace: string;
    swift_prefix: string;
    php_class_prefix: string;
    php_namespace: string;
    php_metadata_namespace: string;
    ruby_package: string;
    uninterpreted_option: Array<UninterpretedOption>;

    constructor(
      java_package: string = "",
      java_outer_classname: string = "",
      java_multiple_files: bool = false,
      java_generate_equals_and_hash: bool = false,
      java_string_check_utf8: bool = false,
      optimize_for: OptimizeMode = SPEED,
      go_package: string = "",
      cc_generic_services: bool = false,
      java_generic_services: bool = false,
      py_generic_services: bool = false,
      php_generic_services: bool = false,
      deprecated: bool = false,
      cc_enable_arenas: bool = true,
      objc_class_prefix: string = "",
      csharp_namespace: string = "",
      swift_prefix: string = "",
      php_class_prefix: string = "",
      php_namespace: string = "",
      php_metadata_namespace: string = "",
      ruby_package: string = "",
      uninterpreted_option: Array<UninterpretedOption> = []
    ) {
      this.java_package = java_package;
      this.java_outer_classname = java_outer_classname;
      this.java_multiple_files = java_multiple_files;
      this.java_generate_equals_and_hash = java_generate_equals_and_hash;
      this.java_string_check_utf8 = java_string_check_utf8;
      this.optimize_for = optimize_for;
      this.go_package = go_package;
      this.cc_generic_services = cc_generic_services;
      this.java_generic_services = java_generic_services;
      this.py_generic_services = py_generic_services;
      this.php_generic_services = php_generic_services;
      this.deprecated = deprecated;
      this.cc_enable_arenas = cc_enable_arenas;
      this.objc_class_prefix = objc_class_prefix;
      this.csharp_namespace = csharp_namespace;
      this.swift_prefix = swift_prefix;
      this.php_class_prefix = php_class_prefix;
      this.php_namespace = php_namespace;
      this.php_metadata_namespace = php_metadata_namespace;
      this.ruby_package = ruby_package;
      this.uninterpreted_option = uninterpreted_option;
    }
  }

  export namespace FileOptions {
    export enum OptimizeMode {
      SPEED = 1,
      CODE_SIZE = 2,
      LITE_RUNTIME = 3,
    }
  }

  export class MessageOptions {
    static encode(message: MessageOptions, writer: Writer): void {
      if (message.message_set_wire_format != false) {
        writer.uint32(8);
        writer.bool(message.message_set_wire_format);
      }

      if (message.no_standard_descriptor_accessor != false) {
        writer.uint32(16);
        writer.bool(message.no_standard_descriptor_accessor);
      }

      if (message.deprecated != false) {
        writer.uint32(24);
        writer.bool(message.deprecated);
      }

      if (message.map_entry != false) {
        writer.uint32(56);
        writer.bool(message.map_entry);
      }

      const unique_name_uninterpreted_option = message.uninterpreted_option;
      for (let i = 0; i < unique_name_uninterpreted_option.length; ++i) {
        writer.uint32(7994);
        writer.fork();
        UninterpretedOption.encode(unique_name_uninterpreted_option[i], writer);
        writer.ldelim();
      }
    }

    static decode(reader: Reader, length: i32): MessageOptions {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new MessageOptions();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.message_set_wire_format = reader.bool();
            break;

          case 2:
            message.no_standard_descriptor_accessor = reader.bool();
            break;

          case 3:
            message.deprecated = reader.bool();
            break;

          case 7:
            message.map_entry = reader.bool();
            break;

          case 999:
            message.uninterpreted_option.push(
              UninterpretedOption.decode(reader, reader.uint32())
            );
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    message_set_wire_format: bool;
    no_standard_descriptor_accessor: bool;
    deprecated: bool;
    map_entry: bool;
    uninterpreted_option: Array<UninterpretedOption>;

    constructor(
      message_set_wire_format: bool = false,
      no_standard_descriptor_accessor: bool = false,
      deprecated: bool = false,
      map_entry: bool = false,
      uninterpreted_option: Array<UninterpretedOption> = []
    ) {
      this.message_set_wire_format = message_set_wire_format;
      this.no_standard_descriptor_accessor = no_standard_descriptor_accessor;
      this.deprecated = deprecated;
      this.map_entry = map_entry;
      this.uninterpreted_option = uninterpreted_option;
    }
  }

  export class FieldOptions {
    static encode(message: FieldOptions, writer: Writer): void {
      if (message.ctype != STRING) {
        writer.uint32(8);
        writer.int32(message.ctype);
      }

      if (message.packed != false) {
        writer.uint32(16);
        writer.bool(message.packed);
      }

      if (message.jstype != JS_NORMAL) {
        writer.uint32(48);
        writer.int32(message.jstype);
      }

      if (message.lazy != false) {
        writer.uint32(40);
        writer.bool(message.lazy);
      }

      if (message.deprecated != false) {
        writer.uint32(24);
        writer.bool(message.deprecated);
      }

      if (message.weak != false) {
        writer.uint32(80);
        writer.bool(message.weak);
      }

      const unique_name_uninterpreted_option = message.uninterpreted_option;
      for (let i = 0; i < unique_name_uninterpreted_option.length; ++i) {
        writer.uint32(7994);
        writer.fork();
        UninterpretedOption.encode(unique_name_uninterpreted_option[i], writer);
        writer.ldelim();
      }
    }

    static decode(reader: Reader, length: i32): FieldOptions {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new FieldOptions();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.ctype = reader.int32();
            break;

          case 2:
            message.packed = reader.bool();
            break;

          case 6:
            message.jstype = reader.int32();
            break;

          case 5:
            message.lazy = reader.bool();
            break;

          case 3:
            message.deprecated = reader.bool();
            break;

          case 10:
            message.weak = reader.bool();
            break;

          case 999:
            message.uninterpreted_option.push(
              UninterpretedOption.decode(reader, reader.uint32())
            );
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    ctype: CType;
    packed: bool;
    jstype: JSType;
    lazy: bool;
    deprecated: bool;
    weak: bool;
    uninterpreted_option: Array<UninterpretedOption>;

    constructor(
      ctype: CType = STRING,
      packed: bool = false,
      jstype: JSType = JS_NORMAL,
      lazy: bool = false,
      deprecated: bool = false,
      weak: bool = false,
      uninterpreted_option: Array<UninterpretedOption> = []
    ) {
      this.ctype = ctype;
      this.packed = packed;
      this.jstype = jstype;
      this.lazy = lazy;
      this.deprecated = deprecated;
      this.weak = weak;
      this.uninterpreted_option = uninterpreted_option;
    }
  }

  export namespace FieldOptions {
    export enum CType {
      STRING = 0,
      CORD = 1,
      STRING_PIECE = 2,
    }

    export enum JSType {
      JS_NORMAL = 0,
      JS_STRING = 1,
      JS_NUMBER = 2,
    }
  }

  export class OneofOptions {
    static encode(message: OneofOptions, writer: Writer): void {
      const unique_name_uninterpreted_option = message.uninterpreted_option;
      for (let i = 0; i < unique_name_uninterpreted_option.length; ++i) {
        writer.uint32(7994);
        writer.fork();
        UninterpretedOption.encode(unique_name_uninterpreted_option[i], writer);
        writer.ldelim();
      }
    }

    static decode(reader: Reader, length: i32): OneofOptions {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new OneofOptions();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 999:
            message.uninterpreted_option.push(
              UninterpretedOption.decode(reader, reader.uint32())
            );
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    uninterpreted_option: Array<UninterpretedOption>;

    constructor(uninterpreted_option: Array<UninterpretedOption> = []) {
      this.uninterpreted_option = uninterpreted_option;
    }
  }

  export class EnumOptions {
    static encode(message: EnumOptions, writer: Writer): void {
      if (message.allow_alias != false) {
        writer.uint32(16);
        writer.bool(message.allow_alias);
      }

      if (message.deprecated != false) {
        writer.uint32(24);
        writer.bool(message.deprecated);
      }

      const unique_name_uninterpreted_option = message.uninterpreted_option;
      for (let i = 0; i < unique_name_uninterpreted_option.length; ++i) {
        writer.uint32(7994);
        writer.fork();
        UninterpretedOption.encode(unique_name_uninterpreted_option[i], writer);
        writer.ldelim();
      }
    }

    static decode(reader: Reader, length: i32): EnumOptions {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new EnumOptions();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 2:
            message.allow_alias = reader.bool();
            break;

          case 3:
            message.deprecated = reader.bool();
            break;

          case 999:
            message.uninterpreted_option.push(
              UninterpretedOption.decode(reader, reader.uint32())
            );
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    allow_alias: bool;
    deprecated: bool;
    uninterpreted_option: Array<UninterpretedOption>;

    constructor(
      allow_alias: bool = false,
      deprecated: bool = false,
      uninterpreted_option: Array<UninterpretedOption> = []
    ) {
      this.allow_alias = allow_alias;
      this.deprecated = deprecated;
      this.uninterpreted_option = uninterpreted_option;
    }
  }

  export class EnumValueOptions {
    static encode(message: EnumValueOptions, writer: Writer): void {
      if (message.deprecated != false) {
        writer.uint32(8);
        writer.bool(message.deprecated);
      }

      const unique_name_uninterpreted_option = message.uninterpreted_option;
      for (let i = 0; i < unique_name_uninterpreted_option.length; ++i) {
        writer.uint32(7994);
        writer.fork();
        UninterpretedOption.encode(unique_name_uninterpreted_option[i], writer);
        writer.ldelim();
      }
    }

    static decode(reader: Reader, length: i32): EnumValueOptions {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new EnumValueOptions();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.deprecated = reader.bool();
            break;

          case 999:
            message.uninterpreted_option.push(
              UninterpretedOption.decode(reader, reader.uint32())
            );
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    deprecated: bool;
    uninterpreted_option: Array<UninterpretedOption>;

    constructor(
      deprecated: bool = false,
      uninterpreted_option: Array<UninterpretedOption> = []
    ) {
      this.deprecated = deprecated;
      this.uninterpreted_option = uninterpreted_option;
    }
  }

  export class ServiceOptions {
    static encode(message: ServiceOptions, writer: Writer): void {
      if (message.deprecated != false) {
        writer.uint32(264);
        writer.bool(message.deprecated);
      }

      const unique_name_uninterpreted_option = message.uninterpreted_option;
      for (let i = 0; i < unique_name_uninterpreted_option.length; ++i) {
        writer.uint32(7994);
        writer.fork();
        UninterpretedOption.encode(unique_name_uninterpreted_option[i], writer);
        writer.ldelim();
      }
    }

    static decode(reader: Reader, length: i32): ServiceOptions {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new ServiceOptions();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 33:
            message.deprecated = reader.bool();
            break;

          case 999:
            message.uninterpreted_option.push(
              UninterpretedOption.decode(reader, reader.uint32())
            );
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    deprecated: bool;
    uninterpreted_option: Array<UninterpretedOption>;

    constructor(
      deprecated: bool = false,
      uninterpreted_option: Array<UninterpretedOption> = []
    ) {
      this.deprecated = deprecated;
      this.uninterpreted_option = uninterpreted_option;
    }
  }

  export class MethodOptions {
    static encode(message: MethodOptions, writer: Writer): void {
      if (message.deprecated != false) {
        writer.uint32(264);
        writer.bool(message.deprecated);
      }

      if (message.idempotency_level != IDEMPOTENCY_UNKNOWN) {
        writer.uint32(272);
        writer.int32(message.idempotency_level);
      }

      const unique_name_uninterpreted_option = message.uninterpreted_option;
      for (let i = 0; i < unique_name_uninterpreted_option.length; ++i) {
        writer.uint32(7994);
        writer.fork();
        UninterpretedOption.encode(unique_name_uninterpreted_option[i], writer);
        writer.ldelim();
      }
    }

    static decode(reader: Reader, length: i32): MethodOptions {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new MethodOptions();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 33:
            message.deprecated = reader.bool();
            break;

          case 34:
            message.idempotency_level = reader.int32();
            break;

          case 999:
            message.uninterpreted_option.push(
              UninterpretedOption.decode(reader, reader.uint32())
            );
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    deprecated: bool;
    idempotency_level: IdempotencyLevel;
    uninterpreted_option: Array<UninterpretedOption>;

    constructor(
      deprecated: bool = false,
      idempotency_level: IdempotencyLevel = IDEMPOTENCY_UNKNOWN,
      uninterpreted_option: Array<UninterpretedOption> = []
    ) {
      this.deprecated = deprecated;
      this.idempotency_level = idempotency_level;
      this.uninterpreted_option = uninterpreted_option;
    }
  }

  export namespace MethodOptions {
    export enum IdempotencyLevel {
      IDEMPOTENCY_UNKNOWN = 0,
      NO_SIDE_EFFECTS = 1,
      IDEMPOTENT = 2,
    }
  }

  export class UninterpretedOption {
    static encode(message: UninterpretedOption, writer: Writer): void {
      const unique_name_name = message.name;
      for (let i = 0; i < unique_name_name.length; ++i) {
        writer.uint32(18);
        writer.fork();
        NamePart.encode(unique_name_name[i], writer);
        writer.ldelim();
      }

      if (message.identifier_value.length != 0) {
        writer.uint32(26);
        writer.string(message.identifier_value);
      }

      if (message.positive_int_value != 0) {
        writer.uint32(32);
        writer.uint64(message.positive_int_value);
      }

      if (message.negative_int_value != 0) {
        writer.uint32(40);
        writer.int64(message.negative_int_value);
      }

      if (message.double_value != 0.0) {
        writer.uint32(49);
        writer.double(message.double_value);
      }

      if (message.string_value.length != 0) {
        writer.uint32(58);
        writer.bytes(message.string_value);
      }

      if (message.aggregate_value.length != 0) {
        writer.uint32(66);
        writer.string(message.aggregate_value);
      }
    }

    static decode(reader: Reader, length: i32): UninterpretedOption {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new UninterpretedOption();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 2:
            message.name.push(NamePart.decode(reader, reader.uint32()));
            break;

          case 3:
            message.identifier_value = reader.string();
            break;

          case 4:
            message.positive_int_value = reader.uint64();
            break;

          case 5:
            message.negative_int_value = reader.int64();
            break;

          case 6:
            message.double_value = reader.double();
            break;

          case 7:
            message.string_value = reader.bytes();
            break;

          case 8:
            message.aggregate_value = reader.string();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    name: Array<NamePart>;
    identifier_value: string;
    positive_int_value: u64;
    negative_int_value: i64;
    double_value: f64;
    string_value: Uint8Array;
    aggregate_value: string;

    constructor(
      name: Array<NamePart> = [],
      identifier_value: string = "",
      positive_int_value: u64 = 0,
      negative_int_value: i64 = 0,
      double_value: f64 = 0.0,
      string_value: Uint8Array = new Uint8Array(0),
      aggregate_value: string = ""
    ) {
      this.name = name;
      this.identifier_value = identifier_value;
      this.positive_int_value = positive_int_value;
      this.negative_int_value = negative_int_value;
      this.double_value = double_value;
      this.string_value = string_value;
      this.aggregate_value = aggregate_value;
    }
  }

  export namespace UninterpretedOption {
    export class NamePart {
      static encode(message: NamePart, writer: Writer): void {
        if (message.name_part.length != 0) {
          writer.uint32(10);
          writer.string(message.name_part);
        }

        if (message.is_extension != false) {
          writer.uint32(16);
          writer.bool(message.is_extension);
        }
      }

      static decode(reader: Reader, length: i32): NamePart {
        const end: usize = length < 0 ? reader.end : reader.ptr + length;
        const message = new NamePart();

        while (reader.ptr < end) {
          const tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              message.name_part = reader.string();
              break;

            case 2:
              message.is_extension = reader.bool();
              break;

            default:
              reader.skipType(tag & 7);
              break;
          }
        }

        return message;
      }

      name_part: string;
      is_extension: bool;

      constructor(name_part: string = "", is_extension: bool = false) {
        this.name_part = name_part;
        this.is_extension = is_extension;
      }
    }
  }

  export class SourceCodeInfo {
    static encode(message: SourceCodeInfo, writer: Writer): void {
      const unique_name_location = message.location;
      for (let i = 0; i < unique_name_location.length; ++i) {
        writer.uint32(10);
        writer.fork();
        Location.encode(unique_name_location[i], writer);
        writer.ldelim();
      }
    }

    static decode(reader: Reader, length: i32): SourceCodeInfo {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new SourceCodeInfo();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.location.push(Location.decode(reader, reader.uint32()));
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    location: Array<Location>;

    constructor(location: Array<Location> = []) {
      this.location = location;
    }
  }

  export namespace SourceCodeInfo {
    export class Location {
      static encode(message: Location, writer: Writer): void {
        const unique_name_path = message.path;
        if (unique_name_path.length !== 0) {
          writer.uint32(10);
          writer.fork();
          for (let i = 0; i < unique_name_path.length; ++i) {
            writer.int32(unique_name_path[i]);
          }
          writer.ldelim();
        }

        const unique_name_span = message.span;
        if (unique_name_span.length !== 0) {
          writer.uint32(18);
          writer.fork();
          for (let i = 0; i < unique_name_span.length; ++i) {
            writer.int32(unique_name_span[i]);
          }
          writer.ldelim();
        }

        if (message.leading_comments.length != 0) {
          writer.uint32(26);
          writer.string(message.leading_comments);
        }

        if (message.trailing_comments.length != 0) {
          writer.uint32(34);
          writer.string(message.trailing_comments);
        }

        const unique_name_leading_detached_comments =
          message.leading_detached_comments;
        if (unique_name_leading_detached_comments.length !== 0) {
          for (
            let i = 0;
            i < unique_name_leading_detached_comments.length;
            ++i
          ) {
            writer.uint32(50);
            writer.string(unique_name_leading_detached_comments[i]);
          }
        }
      }

      static decode(reader: Reader, length: i32): Location {
        const end: usize = length < 0 ? reader.end : reader.ptr + length;
        const message = new Location();

        while (reader.ptr < end) {
          const tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              const repeatedEnd: usize = reader.ptr + reader.uint32();
              while (reader.ptr < repeatedEnd) {
                message.path.push(reader.int32());
              }
              break;

            case 2:
              const repeatedEnd: usize = reader.ptr + reader.uint32();
              while (reader.ptr < repeatedEnd) {
                message.span.push(reader.int32());
              }
              break;

            case 3:
              message.leading_comments = reader.string();
              break;

            case 4:
              message.trailing_comments = reader.string();
              break;

            case 6:
              message.leading_detached_comments.push(reader.string());
              break;

            default:
              reader.skipType(tag & 7);
              break;
          }
        }

        return message;
      }

      path: Array<i32>;
      span: Array<i32>;
      leading_comments: string;
      trailing_comments: string;
      leading_detached_comments: Array<string>;

      constructor(
        path: Array<i32> = [],
        span: Array<i32> = [],
        leading_comments: string = "",
        trailing_comments: string = "",
        leading_detached_comments: Array<string> = []
      ) {
        this.path = path;
        this.span = span;
        this.leading_comments = leading_comments;
        this.trailing_comments = trailing_comments;
        this.leading_detached_comments = leading_detached_comments;
      }
    }
  }

  export class GeneratedCodeInfo {
    static encode(message: GeneratedCodeInfo, writer: Writer): void {
      const unique_name_annotation = message.annotation;
      for (let i = 0; i < unique_name_annotation.length; ++i) {
        writer.uint32(10);
        writer.fork();
        Annotation.encode(unique_name_annotation[i], writer);
        writer.ldelim();
      }
    }

    static decode(reader: Reader, length: i32): GeneratedCodeInfo {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new GeneratedCodeInfo();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.annotation.push(Annotation.decode(reader, reader.uint32()));
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    annotation: Array<Annotation>;

    constructor(annotation: Array<Annotation> = []) {
      this.annotation = annotation;
    }
  }

  export namespace GeneratedCodeInfo {
    export class Annotation {
      static encode(message: Annotation, writer: Writer): void {
        const unique_name_path = message.path;
        if (unique_name_path.length !== 0) {
          writer.uint32(10);
          writer.fork();
          for (let i = 0; i < unique_name_path.length; ++i) {
            writer.int32(unique_name_path[i]);
          }
          writer.ldelim();
        }

        if (message.source_file.length != 0) {
          writer.uint32(18);
          writer.string(message.source_file);
        }

        if (message.begin != 0) {
          writer.uint32(24);
          writer.int32(message.begin);
        }

        if (message.end != 0) {
          writer.uint32(32);
          writer.int32(message.end);
        }
      }

      static decode(reader: Reader, length: i32): Annotation {
        const end: usize = length < 0 ? reader.end : reader.ptr + length;
        const message = new Annotation();

        while (reader.ptr < end) {
          const tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              const repeatedEnd: usize = reader.ptr + reader.uint32();
              while (reader.ptr < repeatedEnd) {
                message.path.push(reader.int32());
              }
              break;

            case 2:
              message.source_file = reader.string();
              break;

            case 3:
              message.begin = reader.int32();
              break;

            case 4:
              message.end = reader.int32();
              break;

            default:
              reader.skipType(tag & 7);
              break;
          }
        }

        return message;
      }

      path: Array<i32>;
      source_file: string;
      begin: i32;
      end: i32;

      constructor(
        path: Array<i32> = [],
        source_file: string = "",
        begin: i32 = 0,
        end: i32 = 0
      ) {
        this.path = path;
        this.source_file = source_file;
        this.begin = begin;
        this.end = end;
      }
    }
  }
}
