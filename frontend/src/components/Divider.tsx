import style from "../styles/divider.module.scss";

export default function Divider({ verticalMargin = null }: { verticalMargin?: string | null; }) {
    return (
        <div className={style.root} style={verticalMargin ? { marginTop: verticalMargin, marginBottom: verticalMargin } : {}}></div>
    );
}