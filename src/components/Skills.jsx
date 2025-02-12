import Highlighted from './Highlighted'
import SkillCard from './SkillCard'




export default function Skills() {
    return <div className="max-w-3xl flex flex-col items-center gap-5 md:flex-row flex-wrap md:justify-center  mx-auto">
        <SkillCard
            className=""
            imgSrc="/assets/flaticons/book-pile.png"
            imgAlt="research">
            I <Highlighted>love learning new things</Highlighted>. It feels like a level-up everytime you gain a new skill. Rest assured, I'll be upgrading myself always.
        </SkillCard>
        <SkillCard
            className=""
            imgSrc="/assets/flaticons/math-book.png"
            imgAlt="math-book">
            Nothing feels more blissful than after you've successfully completed a challenge. I try to <Highlighted>tackle problems from different perspectives</Highlighted>.
        </SkillCard>
        <SkillCard
            imgSrc="/assets/flaticons/teamwork.png"
            imgAlt="programming">
            Being <Highlighted>open-minded</Highlighted>, I tend to <Highlighted>communicate well</Highlighted> with teammates and <Highlighted>can easily adapt</Highlighted> should any new problems arise.
        </SkillCard>
    </div>
}