import "./style.min.css"
type ProgressBarProps = {
    percentage: number;
}

export default function ProgressBar(props: ProgressBarProps) {
    return (
        <div className="progress-bar">
            <p className="percentage">{props.percentage}%</p>
            <div className="progress-bar__fill" style={{ width: `${props.percentage}%` }}>
            </div>
        </div>
    );
}