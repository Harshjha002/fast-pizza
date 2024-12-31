import { useSelector } from 'react-redux'

const Username = () => {
    const username = useSelector((state) => state.user.username)

    if (!username) return null
    return (
        <div>
            <h1 className="hidden text-sm font-semibold md:block">
                {username}
            </h1>
        </div>
    )
}

export default Username
