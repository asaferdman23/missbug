import { useEffect, useState } from "react"

export function BugFilter({ filterBy, onFilter }) {
    const [ _filterBy, setFilterBy ] = useState(filterBy)

    useEffect(() => {
        onFilter(_filterBy)
    }, [_filterBy])

    function handleChange({ target }) {
        const type = target.type
        const name = target.name
        const value = target.value

        setFilterBy(prev => ({...prev, [name]: (type === 'number') ? +value || '' : value }))
    }

    return <section className="bug-filter">
        <h2>Filter</h2>
        <input value={_filterBy.txt} onChange={handleChange} type="text" name="txt" placeholder="By title"/>
        <input value={_filterBy.minSeverity || ''} onChange={handleChange} type="number" name="minSeverity" placeholder="By severity"/>
    </section>
}