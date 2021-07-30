import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Icon({ name, prefix, size, loading, className, ...props }) {
    if (name === '') return null
    return (
        <i className={`my-app-icon ${className}`} {...props}>
            <FontAwesomeIcon icon={[prefix, loading ? 'spinner' : name]} size={size} spin={loading} />
        </i>
    )
}

Icon.defaultProps = {
    name: '',
    prefix: 'fas',
    size: '1x',
    loading: false
}

export default Icon;