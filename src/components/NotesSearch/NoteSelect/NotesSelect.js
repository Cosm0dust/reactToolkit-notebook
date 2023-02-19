import React from 'react';
import styles from './NotesSelect.module.css'

const NotesSelect = ({filter, setFilter, groups, setShowGroupsModal}) => {

    return (
        <div className={styles.selectOne}>
            <div className={styles.selectArea}>
                <select value={filter} onChange={e => setFilter(e.target.value)}>
                    <option value="All">All</option>
                    {groups.map(group =>
                        <option key={group.group} value={group.group}>{group.group}</option>
                    )}
                </select>
                <span className={styles.customArrow}></span>
            </div>
            <button className={styles.selectButton} onClick={() => setShowGroupsModal(true)}>+</button>
        </div>
    );
};

export default NotesSelect;