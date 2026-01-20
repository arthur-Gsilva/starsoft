type Props = {
    onClick: () => void,
    label: string
}

export const Button = ({ onClick, label }: Props) => {
    return (
        <button
            className="bg-[#FF8310] rounded-md text-white py-4 px-8 text-center cursor-pointer"
        >
            {label}
        </button>
    )
}