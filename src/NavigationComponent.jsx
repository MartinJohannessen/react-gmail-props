import PropTypes from 'prop-types'

export default function Navigation({ currentTab, setCurrentTab, unreadEmailsLength, starredEmailsLength, hideRead, setHideRead }) {
    return (
        <nav className="left-menu">
            <ul className="inbox-list">
                <li className={`item ${currentTab === 'inbox' ? 'active' : ''}`} onClick={() => setCurrentTab('inbox')}>
                    <span className="label">Inbox</span>
                    <span className="count">{unreadEmailsLength}</span>
                </li>
                <li className={`item ${currentTab === 'starred' ? 'active' : ''}`} onClick={() => setCurrentTab('starred')}>
                    <span className="label">Starred</span>
                    <span className="count">{starredEmailsLength}</span>
                </li>
                <li className="item toggle">
                    <label htmlFor="hide-read">Hide read</label>
                    <input
                        id="hide-read"
                        type="checkbox"
                        checked={hideRead}
                        onChange={e => setHideRead(e.target.checked)}
                    />
                </li>
            </ul>
        </nav>
    )
}

Navigation.propTypes = {
    currentTab: PropTypes.string.isRequired,
    setCurrentTab: PropTypes.func.isRequired,
    unreadEmailsLength: PropTypes.number.isRequired,
    starredEmailsLength: PropTypes.number.isRequired,
    hideRead: PropTypes.bool.isRequired,
    setHideRead: PropTypes.func.isRequired,
}