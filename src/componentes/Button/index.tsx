import { Button as NativeButton, Heading, IButtonProps} from 'native-base';

type ButtonProps = IButtonProps & {
  title: string;
}

export function Button({ title, ... rest}: ButtonProps){
    return (
        <NativeButton
          bg="green.700"
          h={14}
          fontSize="sm"
          rounded="sm"
          _pressed={{ bg:"green_500"}}
          {...rest}
        >
          <Heading color="white" fontSize="sm">
            {title}
          </Heading>
        </NativeButton>
    )
}