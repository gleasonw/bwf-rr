const generalDipForm = [
    "Straight or slightly hollow body. No bending at the hips!",
    "Lock out the arms and depress the shoulderblades at the top(https://www.reddit.com/r/bodyweightfitness/wiki/kb/positioning/)",
    "Go as far down as you can",
    "Elbows in"
]

const generalRowForm = [
    'Straight body',
    'Elbows in',
    'Arms straight at the bottom',
    'Rings/bar to chest and shoulder blades fully retracted (pinched together) at the top',
    'Don\'t let your shoulders shrug up'
]

const generalPushupForm = [
    'Body in a straight line from head to toe: don\'t let the hips sag!',
    'Lock out arms and protract the shoulderblades at the top',
    'Go down until chest nearly touches the ground',
    'Keep the elbows in, don\'t let them flare out',
    'Don\'t shrug up your shoulders to your ears, focus on depressing the shoulderblades'
]

export const exercises = {
    "pull": [
        {
            name: "scapular pull",
            form: [],
            vidLink: 'https://www.youtube.com/watch?t=1m21s&v=FgYoc4O-cio&feature=youtu.be'
        },
        {
            name: "arch hangs",
            form: [],
            vidLink: 'https://youtu.be/C995b3KLXS4?t=7s'
        },
        {
            name: 'pull-up negatives',
            form: [],
            vidLink: 'https://www.youtube.com/watch?v=EkpJkHpJXmM'
        },
        {
            name: 'pull-ups',
            form: [],
            vidLink: 'https://www.youtube.com/watch?v=eGo4IYlbE5g'
        }
    ],
    "squat": [
        {
            name: "Assisted Squat",
            form: ["Grab something in front of you and use your hands to assist in the squat. Reduce assistance over time."],
            vidLink: 'https://www.youtube.com/watch?v=OuR_Fp7AB0c'
        },
        {
            name: "Squat",
            form: [
                "Stand up straight at the top",
                "Go as low as you can, preferably until the hop sare below the knees",
                "Dig your big toe and heel into the ground",
                "Keep your knee in-line with your toes",
                "Don't let the knees come inward on either the descend or the ascned; think about pushing the knees out"
            ],
            vidLink: 'https://www.youtube.com/watch?v=zJBLDJMJiDE'
        },
        {
            name: "Split Squat",
            form: [
                "Pretend the dumbbell doesn't exist",
                "Remain in the split stance throughout the set. Unlike a lunge, you don't return to a 'feet together' stance."
            ],
            vidLink: 'https://www.getstrong.fit/images/GobletSplitSquat.jpg'
        },
        {
            name: "Bulgarian Split Squat",
            form: [
                "Pretend the barbell doesn't exist",
                "You can progress this further by elevating both your legs"
            ],
            vidLink: 'https://www.youtube.com/watch?v=kkdmHTASZg8&feature=youtu.be&t=1m15s'
        },
        {
            name: "Beginner Shrimp Squat",
            form: "Make sure your knee and toes leave the floor at the same time",
            vidLink: 'https://www.youtube.com/watch?v=TKt0-c83GSc&feature=youtu.be&t=3m9s'
        }
    ],
    "dip": [
        {
            name: "Parallel Bar Support Hold",
            form: [
                "Work up to 3 sets of 1 minute holds for this progression",
                "What if I dont have parallel bars?",
                "https://www.reddit.com/r/bodyweightfitness/wiki/exercises/dip/#wiki_what_if_i_don.27t_have_parallel_bars.3F",
                "If you can't hold yourself up at all, consider using bands or your feet to assist you until you gain the necessary strength."
            ],
            vidLink: 'https://antranik.org/wp-content/uploads/2014/01/antranik-holding-support-hold-on-parallel-bars.jpg'
        },
        {
            name: "Negative Dips",
            form: [
                "This exercise is only the descent. To get to the starting position you can jump or use a box or anything",
                "Lower yourself with control. Work up to 10 sec descents"
            ],
            vidLink: 'https://www.youtube.com/watch?v=T3Scqw1BbCc'
        },
        {
            name: "Parallel Bar Dips",
            form: generalDipForm,
            vidLink: 'https://www.youtube.com/watch?v=2z8JmcrW-As'
        }
    ],
    "hinge": [
        {
            name: "Romanian Deadlift",
            form: [
                "Stand up straight. Brace and squeeze your butt to flatten your low back (neutral spine to maybe slightly arched).",
                "Send your butt back and lean your torso forward to avoid falling over",
                "You can place the hands on your chest and abdomen for feedback or let them hang by your sides"
            ],
            vidLink: 'https://gfycat.com/blueultimatebaiji'
        },
        {
            name: "Single Leg Deadlift",
            form: [
                "Please ignore the barbell.",
                "If you lack the balance to perform these with a leg in the air, you can use an arm to brace yourself against a surface or you can straddle your legs to help with balance.",
                "https://i.imgur.com/VUF6VLa.jpg"
            ],
            vidLink: 'https://www.youtube.com/watch?v=iDV8r5u6En0'
        },
        {
            name: 'Banded Nordic Curl Negatives',
            form: [
                "Anchor your feet under something sturdy. You want to be anchored about a fist's distance away from your ankle.",
                "Squeeze your butt to keep your hips extended",
                "Slowly lower your torso, avoiding piking at the hips",
                "Do a little push-up when you reach the bottom to get back to the top and 'skip' the concentric"
            ],
            vidLink:'https://www.youtube.com/watch?v=HUXS3S2xSX4'
        },
        {
            name: 'Banded Nordic Curl',
            form: [
                "Anchor your feet under something sturdy. You want to be anchored about a fist's distance away from your ankle.",
                "Squeeze your butt to keep your hips extended",
                "Slowly lower your torso, avoid piking at the hips."
            ],
            vidLink: 'https://www.youtube.com/watch?v=HUXS3S2xSX4'
        },
        {
            name: 'Nordic Curls',
            form: [
                'Anchor your feet under something sturdy. You want to be anchored about a fist\'s distance away from your ankle.',
                "Squeeze your butt to keep your hips extended",
                "Slowly lower your torso, avoid piking at the hips."
            ],
            vidLink:'https://www.youtube.com/watch?v=d8AAPcYxPo8'
        }
    ],
    "row": [
        {
            name: 'Vertical Rows',
            form: [
                'Perform a row, but with the body position vertical.'
            ],
            vidLink: 'https://www.youtube.com/watch?v=rloXYB8M3vU&feature=youtu.be'
        },
        {
            name: 'Incline Rows',
            form: [
                'Perform a row, but with the body position somewhere between vertical and horizontal. Go closer to horizontal to make it harder.',
                'Don\'t have a low bar? Incline rows using nothing but a bedsheet and a cloed door.',
                'https://www.youtube.com/watch?v=rloXYB8M3vU&feature=youtu.be'
            ],
            vidLink: 'https://www.youtube.com/watch?v=LR2EnFWpVao'
        },
        {
            name: 'Horizontal Rows',
            form: generalRowForm,
            vidLink: 'https://www.youtube.com/watch?v=dvkIaarnf0g'
        },
        {
            name: 'Wide Rows',
            form: [
                'It\'s okay to flare your elbows on this one',
                'On a bar: take a wide grip (1.5 times shoulder width) and perform rows like this.',
                'On rings: while performing a row, bring out the elbows to the side up to a 90 degree angle.'
            ],
            vidLink: 'https://www.youtube.com/watch?v=f3yfJ0RStQw'
        },
        {
            name: 'Weighted Inverted Rows',
            form: [
                'These can be done with a weight plate on your chest/belly (uncomfortable and unreliable), or with a weight vest (minimal setup, but limited weight), or with a dip belt hanging from your waist or chest (This method can be loaded the most, however you need to elevate your entire body so that the plates don\'t touch the floor at the bottom). Alternatively, you can do Barbell or Dumbbell rows.'
            ],
            vidLink: 'https://www.youtube.com/watch?v=3cYR6pis5zc'
        }
    ],
    "push": [
        {
            name: 'Vertical Pushup',
            form: [
                'Standing next to a wall, put your hands on the wall and perform a pushup.'
            ],
            vidLink: 'https://www.realsimple.com/thmb/nPr-c4XZsYQ6Wo1DEV85BArxMNw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/wall-push-up_300-0abe8bee380249909ef6966aa444d301.jpg'
        },
        {
            name: 'Incline Pushup',
            form: [
                'Finding some raised object, put your hands on said object and perform a pushup. Lower the height to increase the difficulty.'
            ],
            vidLink: 'https://www.youtube.com/watch?t=3m56s&v=4dF1DOWzf20&feature=youtu.be'
        },
        {
            name: 'Full Pushup',
            form: generalPushupForm,
            vidLink: 'https://www.youtube.com/watch?v=IODxDxX7oi4'
        },
        {
            name: 'Diamond Pushup',
            form: [
                'Put your hands close together so the thumbs and index fingers touch, then perform a pushup. ',
                'If this is too difficult or feels uncomfortable, put your hands just a bit closer than in a normal pushup. Work on moving the hands closer together over time until you reach diamond pushups.'
            ],
            vidLink: 'https://www.youtube.com/watch?v=_4EGPVJuqfA'
        },
        {
            name: 'Pseudo Planche Pushups',
            form: [
                'Putting your hands sideways, lean forward with a straight body until your shoulders are in front of your hands. Perform a pushup while maintaining forward lean. Protract the shoulderblades at the top.',
                'Increase forward lean to make more difficult. Decrease forward lean to make easier. You won\'t run out of resistance anytime soon if you keep increasing your forward lean.'
            ],
            vidLink: 'http://www.youtube.com/watch?v=Cdmg0CfMZeo'
        }
    ],
    "core-anti-extension": [],
    "core-rotation": [],
    "core-extension": [],
    "stretch": []
}
