const exList = [
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0001.gif',
		'name': '3/4 sit-up',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0002.gif',
		'name': '45° side bend',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0003.gif',
		'name': 'air bike',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1512.gif',
		'name': 'all fours squad stretch',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0006.gif',
		'name': 'alternate heel touchers',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0007.gif',
		'name': 'alternate lateral pulldown',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1368.gif',
		'name': 'ankle circles',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/3293.gif',
		'name': 'archer pull up',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/3294.gif',
		'name': 'archer push up',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/2355.gif',
		'name': 'arm slingers hanging bent knee legs',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/2333.gif',
		'name': 'arm slingers hanging straight legs',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/3214.gif',
		'name': 'arms apart circular toe touch (male)',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/3204.gif',
		'name': 'arms overhead full sit-up (male)',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0009.gif',
		'name': 'assisted chest dip (kneeling)',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0011.gif',
		'name': 'assisted hanging knee raise',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0010.gif',
		'name': 'assisted hanging knee raise with throw down',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1708.gif',
		'name': 'assisted lying calves stretch',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1709.gif',
		'name': 'assisted lying glutes stretch',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1710.gif',
		'name': 'assisted lying gluteus and piriformis stretch',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0012.gif',
		'name': 'assisted lying leg raise with lateral throw down',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0013.gif',
		'name': 'assisted lying leg raise with throw down',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0014.gif',
		'name': 'assisted motion russian twist',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0015.gif',
		'name': 'assisted parallel close grip pull-up',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0016.gif',
		'name': 'assisted prone hamstring',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1713.gif',
		'name': 'assisted prone lying quads stretch',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1714.gif',
		'name': 'assisted prone rectus femoris stretch',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0017.gif',
		'name': 'assisted pull-up',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1716.gif',
		'name': 'assisted seated pectoralis major stretch with stability ball',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1712.gif',
		'name': 'assisted side lying adductor stretch',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1758.gif',
		'name': 'assisted sit-up',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1431.gif',
		'name': 'assisted standing chin-up',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1432.gif',
		'name': 'assisted standing pull-up',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0018.gif',
		'name': 'assisted standing triceps extension (with towel)',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0019.gif',
		'name': 'assisted triceps dip (kneeling)',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/2364.gif',
		'name': 'assisted wide-grip chest dip (kneeling)',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/3220.gif',
		'name': 'astride jumps (male)',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/3672.gif',
		'name': 'back and forth step',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1314.gif',
		'name': 'back extension on exercise ball',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/3297.gif',
		'name': 'back lever',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1405.gif',
		'name': 'back pec stretch',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1473.gif',
		'name': 'backward jump',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0020.gif',
		'name': 'balance board',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0968.gif',
		'name': 'band alternating biceps curl',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0969.gif',
		'name': 'band alternating v-up',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0970.gif',
		'name': 'band assisted pull-up',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0971.gif',
		'name': 'band assisted wheel rollerout',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1254.gif',
		'name': 'band bench press',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0980.gif',
		'name': 'band bent-over hip extension',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0972.gif',
		'name': 'band bicycle crunch',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0974.gif',
		'name': 'band close-grip pulldown',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0975.gif',
		'name': 'band close-grip push-up',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0976.gif',
		'name': 'band concentration curl',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/3117.gif',
		'name': 'band fixed back close grip pulldown',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/3116.gif',
		'name': 'band fixed back underhand pulldown',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0977.gif',
		'name': 'band front lateral raise',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0978.gif',
		'name': 'band front raise',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1408.gif',
		'name': 'band hip lift',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0979.gif',
		'name': 'band horizontal pallof press',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0981.gif',
		'name': 'band jack knife sit-up',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0983.gif',
		'name': 'band kneeling one arm pulldown',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0985.gif',
		'name': 'band kneeling twisting crunch',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0984.gif',
		'name': 'band lying hip internal rotation',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1002.gif',
		'name': 'band lying straight leg raise',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0986.gif',
		'name': 'band one arm overhead biceps curl',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0987.gif',
		'name': 'band one arm single leg split squat',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0988.gif',
		'name': 'band one arm standing low row',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0989.gif',
		'name': 'band one arm twisting chest press',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0990.gif',
		'name': 'band one arm twisting seated row',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0991.gif',
		'name': 'band pull through',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0992.gif',
		'name': 'band push sit-up',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0993.gif',
		'name': 'band reverse fly',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0994.gif',
		'name': 'band reverse wrist curl',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0996.gif',
		'name': 'band seated hip internal rotation',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1011.gif',
		'name': 'band seated twist',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0997.gif',
		'name': 'band shoulder press',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1018.gif',
		'name': 'band shrug',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0998.gif',
		'name': 'band side triceps extension',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0999.gif',
		'name': 'band single leg calf raise',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1000.gif',
		'name': 'band single leg reverse calf raise',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1001.gif',
		'name': 'band single leg split squat',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1004.gif',
		'name': 'band squat',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1003.gif',
		'name': 'band squat row',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1005.gif',
		'name': 'band standing crunch',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1022.gif',
		'name': 'band standing rear delt row',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1007.gif',
		'name': 'band standing twisting crunch',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1008.gif',
		'name': 'band step-up',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1009.gif',
		'name': 'band stiff leg deadlift',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1023.gif',
		'name': 'band straight back stiff leg deadlift',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1010.gif',
		'name': 'band straight leg deadlift',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1012.gif',
		'name': 'band twisting overhead press',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1369.gif',
		'name': 'band two legs calf raise - (band under both legs) v. 2',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1013.gif',
		'name': 'band underhand pulldown',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1014.gif',
		'name': 'band v-up',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1015.gif',
		'name': 'band vertical pallof press',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1016.gif',
		'name': 'band wrist curl',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1017.gif',
		'name': 'band y-raise',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0023.gif',
		'name': 'barbell alternate biceps curl',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0024.gif',
		'name': 'barbell bench front squat',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0025.gif',
		'name': 'barbell bench press',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0026.gif',
		'name': 'barbell bench squat',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1316.gif',
		'name': 'barbell bent arm pullover',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0027.gif',
		'name': 'barbell bent over row',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/2407.gif',
		'name': 'barbell biceps curl (with arm blaster)',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0028.gif',
		'name': 'barbell clean and press',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0029.gif',
		'name': 'barbell clean-grip front squat',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0030.gif',
		'name': 'barbell close-grip bench press',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0031.gif',
		'name': 'barbell curl',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0032.gif',
		'name': 'barbell deadlift',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0033.gif',
		'name': 'barbell decline bench press',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0034.gif',
		'name': 'barbell decline bent arm pullover',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0035.gif',
		'name': 'barbell decline close grip to skull press',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1255.gif',
		'name': 'barbell decline pullover',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0036.gif',
		'name': 'barbell decline wide-grip press',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0037.gif',
		'name': 'barbell decline wide-grip pullover',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0038.gif',
		'name': 'barbell drag curl',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1370.gif',
		'name': 'barbell floor calf raise',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0039.gif',
		'name': 'barbell front chest squat',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0041.gif',
		'name': 'barbell front raise',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0040.gif',
		'name': 'barbell front raise and pullover',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0042.gif',
		'name': 'barbell front squat',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0043.gif',
		'name': 'barbell full squat',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1461.gif',
		'name': 'barbell full squat (back pov)',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1462.gif',
		'name': 'barbell full squat (side pov)',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1545.gif',
		'name': 'barbell full zercher squat',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1409.gif',
		'name': 'barbell glute bridge',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/3562.gif',
		'name': 'barbell glute bridge two legs on bench (male)',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0044.gif',
		'name': 'barbell good morning',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0045.gif',
		'name': 'barbell guillotine bench press',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0046.gif',
		'name': 'barbell hack squat',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1436.gif',
		'name': 'barbell high bar squat',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0047.gif',
		'name': 'barbell incline bench press',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1719.gif',
		'name': 'barbell incline close grip bench press',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0048.gif',
		'name': 'barbell incline reverse-grip press',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0049.gif',
		'name': 'barbell incline row',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0050.gif',
		'name': 'barbell incline shoulder raise',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0051.gif',
		'name': 'barbell jefferson squat',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0052.gif',
		'name': 'barbell jm bench press',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0053.gif',
		'name': 'barbell jump squat',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1410.gif',
		'name': 'barbell lateral lunge',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1435.gif',
		'name': 'barbell low bar squat',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0054.gif',
		'name': 'barbell lunge',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1720.gif',
		'name': 'barbell lying back of the head tricep extension',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0055.gif',
		'name': 'barbell lying close-grip press',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0056.gif',
		'name': 'barbell lying close-grip triceps extension',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0057.gif',
		'name': 'barbell lying extension',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0058.gif',
		'name': 'barbell lying lifting (on hip)',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0059.gif',
		'name': 'barbell lying preacher curl',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0061.gif',
		'name': 'barbell lying triceps extension',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0060.gif',
		'name': 'barbell lying triceps extension skull crusher',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0063.gif',
		'name': 'barbell narrow stance squat',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0064.gif',
		'name': 'barbell one arm bent over row',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0065.gif',
		'name': 'barbell one arm floor press',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0066.gif',
		'name': 'barbell one arm side deadlift',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0067.gif',
		'name': 'barbell one arm snatch',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0068.gif',
		'name': 'barbell one leg squat',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0069.gif',
		'name': 'barbell overhead squat',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1411.gif',
		'name': 'barbell palms down wrist curl over a bench',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1412.gif',
		'name': 'barbell palms up wrist curl over a bench',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/3017.gif',
		'name': 'barbell pendlay row',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1751.gif',
		'name': 'barbell pin presses',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0070.gif',
		'name': 'barbell preacher curl',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0071.gif',
		'name': 'barbell press sit-up',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0072.gif',
		'name': 'barbell prone incline curl',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0073.gif',
		'name': 'barbell pullover',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0022.gif',
		'name': 'barbell pullover to press',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0074.gif',
		'name': 'barbell rack pull',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0075.gif',
		'name': 'barbell rear delt raise',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0076.gif',
		'name': 'barbell rear delt row',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0078.gif',
		'name': 'barbell rear lunge',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0077.gif',
		'name': 'barbell rear lunge v. 2',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0079.gif',
		'name': 'barbell revers wrist curl v. 2',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/2187.gif',
		'name': 'barbell reverse close-grip bench press',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0080.gif',
		'name': 'barbell reverse curl',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0118.gif',
		'name': 'barbell reverse grip bent over row',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1256.gif',
		'name': 'barbell reverse grip decline bench press',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1257.gif',
		'name': 'barbell reverse grip incline bench press',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1317.gif',
		'name': 'barbell reverse grip incline bench row',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1721.gif',
		'name': 'barbell reverse grip skullcrusher',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0081.gif',
		'name': 'barbell reverse preacher curl',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0082.gif',
		'name': 'barbell reverse wrist curl',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0084.gif',
		'name': 'barbell rollerout',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0083.gif',
		'name': 'barbell rollerout from bench',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0085.gif',
		'name': 'barbell romanian deadlift',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0086.gif',
		'name': 'barbell seated behind head military press',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0087.gif',
		'name': 'barbell seated bradford rocky press',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0088.gif',
		'name': 'barbell seated calf raise',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1371.gif',
		'name': 'barbell seated calf raise',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1718.gif',
		'name': 'barbell seated close grip behind neck triceps extension',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0089.gif',
		'name': 'barbell seated close-grip concentration curl',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0090.gif',
		'name': 'barbell seated good morning',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0091.gif',
		'name': 'barbell seated overhead press',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0092.gif',
		'name': 'barbell seated overhead triceps extension',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0094.gif',
		'name': 'barbell seated twist',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0095.gif',
		'name': 'barbell shrug',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0096.gif',
		'name': 'barbell side bent v. 2',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0098.gif',
		'name': 'barbell side split squat',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0097.gif',
		'name': 'barbell side split squat v. 2',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1756.gif',
		'name': 'barbell single leg deadlift',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0099.gif',
		'name': 'barbell single leg split squat',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/2799.gif',
		'name': 'barbell sitted alternate leg raise',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/2800.gif',
		'name': 'barbell sitted alternate leg raise (female)',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0100.gif',
		'name': 'barbell skier',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0101.gif',
		'name': 'barbell speed squat',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/2810.gif',
		'name': 'barbell split squat v. 2',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0102.gif',
		'name': 'barbell squat (on knees)',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/2798.gif',
		'name': 'barbell squat jump step rear lunge',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0103.gif',
		'name': 'barbell standing ab rollerout',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0104.gif',
		'name': 'barbell standing back wrist curl',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0105.gif',
		'name': 'barbell standing bradford press',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1372.gif',
		'name': 'barbell standing calf raise',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0106.gif',
		'name': 'barbell standing close grip curl',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1456.gif',
		'name': 'barbell standing close grip military press',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/2414.gif',
		'name': 'barbell standing concentration curl',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0107.gif',
		'name': 'barbell standing front raise over head',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0108.gif',
		'name': 'barbell standing leg calf raise',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0109.gif',
		'name': 'barbell standing overhead triceps extension',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0110.gif',
		'name': 'barbell standing reverse grip curl',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0111.gif',
		'name': 'barbell standing rocking leg calf raise',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0112.gif',
		'name': 'barbell standing twist',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1629.gif',
		'name': 'barbell standing wide grip biceps curl',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1457.gif',
		'name': 'barbell standing wide military press',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0113.gif',
		'name': 'barbell standing wide-grip curl',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0114.gif',
		'name': 'barbell step-up',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0115.gif',
		'name': 'barbell stiff leg good morning',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0116.gif',
		'name': 'barbell straight leg deadlift',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0117.gif',
		'name': 'barbell sumo deadlift',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/3305.gif',
		'name': 'barbell thruster',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0120.gif',
		'name': 'barbell upright row',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0119.gif',
		'name': 'barbell upright row v. 2',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0121.gif',
		'name': 'barbell upright row v. 3',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0122.gif',
		'name': 'barbell wide bench press',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1258.gif',
		'name': 'barbell wide reverse grip bench press',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0124.gif',
		'name': 'barbell wide squat',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0123.gif',
		'name': 'barbell wide-grip upright row',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0126.gif',
		'name': 'barbell wrist curl',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0125.gif',
		'name': 'barbell wrist curl v. 2',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0127.gif',
		'name': 'barbell zercher squat',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/3212.gif',
		'name': 'basic toe touch (male)',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0128.gif',
		'name': 'battling ropes',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/3360.gif',
		'name': 'bear crawl',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1259.gif',
		'name': 'behind head chest stretch',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0129.gif',
		'name': 'bench dip (knees bent)',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1399.gif',
		'name': 'bench dip on floor',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0130.gif',
		'name': 'bench hip extension',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/3019.gif',
		'name': 'bench pull-ups',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/3639.gif',
		'name': 'bent knee lying twist (male)',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1770.gif',
		'name': 'biceps leg concentration curl',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0139.gif',
		'name': 'biceps narrow pull-ups',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0140.gif',
		'name': 'biceps pull-up',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0137.gif',
		'name': 'body-up',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/3543.gif',
		'name': 'bodyweight drop jump squat',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/3544.gif',
		'name': 'bodyweight incline side plank',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1771.gif',
		'name': 'bodyweight kneeling triceps extension',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1769.gif',
		'name': 'bodyweight side lying biceps curl',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/3168.gif',
		'name': 'bodyweight squatting row',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/3167.gif',
		'name': 'bodyweight squatting row (with towel)',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1373.gif',
		'name': 'bodyweight standing calf raise',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/3156.gif',
		'name': 'bodyweight standing close-grip one arm row',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/3158.gif',
		'name': 'bodyweight standing close-grip row',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/3162.gif',
		'name': 'bodyweight standing one arm row',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/3161.gif',
		'name': 'bodyweight standing one arm row (with towel)',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/3166.gif',
		'name': 'bodyweight standing row',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/3165.gif',
		'name': 'bodyweight standing row (with towel)',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0138.gif',
		'name': 'bottoms-up',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1374.gif',
		'name': 'box jump down with one leg stabilization',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/2466.gif',
		'name': 'bridge - mountain climber (cross body)',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1160.gif',
		'name': 'burpee',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0870.gif',
		'name': 'butt-ups',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1494.gif',
		'name': 'butterfly yoga pose',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0148.gif',
		'name': 'cable alternate shoulder press',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0149.gif',
		'name': 'cable alternate triceps extension',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/3235.gif',
		'name': 'cable assisted inverse leg curl',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0150.gif',
		'name': 'cable bar lateral pulldown',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0151.gif',
		'name': 'cable bench press',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1630.gif',
		'name': 'cable close grip curl',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1631.gif',
		'name': 'cable concentration curl',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0152.gif',
		'name': 'cable concentration extension (on knee)',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0153.gif',
		'name': 'cable cross-over lateral pulldown',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0154.gif',
		'name': 'cable cross-over revers fly',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0155.gif',
		'name': 'cable cross-over variation',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0868.gif',
		'name': 'cable curl',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0157.gif',
		'name': 'cable deadlift',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0158.gif',
		'name': 'cable decline fly',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1260.gif',
		'name': 'cable decline one arm press',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1261.gif',
		'name': 'cable decline press',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0159.gif',
		'name': 'cable decline seated wide-grip row',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1632.gif',
		'name': 'cable drag curl',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0160.gif',
		'name': 'cable floor seated wide-grip row',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0161.gif',
		'name': 'cable forward raise',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0162.gif',
		'name': 'cable front raise',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0164.gif',
		'name': 'cable front shoulder raise',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0165.gif',
		'name': 'cable hammer curl (with rope)',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1722.gif',
		'name': 'cable high pulley overhead tricep extension',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0167.gif',
		'name': 'cable high row (kneeling)',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0168.gif',
		'name': 'cable hip adduction',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0169.gif',
		'name': 'cable incline bench press',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1318.gif',
		'name': 'cable incline bench row',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0171.gif',
		'name': 'cable incline fly',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0170.gif',
		'name': 'cable incline fly (on stability ball)',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0172.gif',
		'name': 'cable incline pushdown',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0173.gif',
		'name': 'cable incline triceps extension',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0174.gif',
		'name': 'cable judo flip',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0860.gif',
		'name': 'cable kickback',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0175.gif',
		'name': 'cable kneeling crunch',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/3697.gif',
		'name': 'cable kneeling rear delt row (with rope) (male)',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0176.gif',
		'name': 'cable kneeling triceps extension',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/2330.gif',
		'name': 'cable lat pulldown full range of motion',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0177.gif',
		'name': 'cable lateral pulldown (with rope attachment)',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/2616.gif',
		'name': 'cable lateral pulldown with v-bar',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0178.gif',
		'name': 'cable lateral raise',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0179.gif',
		'name': 'cable low fly',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0180.gif',
		'name': 'cable low seated row',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1634.gif',
		'name': 'cable lying bicep curl',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0182.gif',
		'name': 'cable lying close-grip curl',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0184.gif',
		'name': 'cable lying extension pullover (with rope attachment)',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0185.gif',
		'name': 'cable lying fly',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0186.gif',
		'name': 'cable lying triceps extension v. 2',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0188.gif',
		'name': 'cable middle fly',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0189.gif',
		'name': 'cable one arm bent over row',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0190.gif',
		'name': 'cable one arm curl',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1262.gif',
		'name': 'cable one arm decline chest fly',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1263.gif',
		'name': 'cable one arm fly on exercise ball',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1264.gif',
		'name': 'cable one arm incline fly on exercise ball',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1265.gif',
		'name': 'cable one arm incline press',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1266.gif',
		'name': 'cable one arm incline press on exercise ball',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0191.gif',
		'name': 'cable one arm lateral bent-over',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0192.gif',
		'name': 'cable one arm lateral raise',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1633.gif',
		'name': 'cable one arm preacher curl',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1267.gif',
		'name': 'cable one arm press on exercise ball',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/3563.gif',
		'name': 'cable one arm pulldown',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1635.gif',
		'name': 'cable one arm reverse preacher curl',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0193.gif',
		'name': 'cable one arm straight back high row (kneeling)',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1723.gif',
		'name': 'cable one arm tricep pushdown',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1636.gif',
		'name': 'cable overhead curl',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1637.gif',
		'name': 'cable overhead curl on exercise ball',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0194.gif',
		'name': 'cable overhead triceps extension (rope attachment)',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1319.gif',
		'name': 'cable palm rotational row',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0195.gif',
		'name': 'cable preacher curl',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1268.gif',
		'name': 'cable press on exercise ball',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0196.gif',
		'name': 'cable pull through (with rope)',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0198.gif',
		'name': 'cable pulldown',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0197.gif',
		'name': 'cable pulldown (pro lat bar)',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1638.gif',
		'name': 'cable pulldown bicep curl',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0201.gif',
		'name': 'cable pushdown',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0199.gif',
		'name': 'cable pushdown (straight arm) v. 2',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0200.gif',
		'name': 'cable pushdown (with rope attachment)',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0202.gif',
		'name': 'cable rear delt row (stirrups)',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0203.gif',
		'name': 'cable rear delt row (with rope)',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0204.gif',
		'name': 'cable rear drive',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0205.gif',
		'name': 'cable rear pulldown',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0873.gif',
		'name': 'cable reverse crunch',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0206.gif',
		'name': 'cable reverse curl',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/2406.gif',
		'name': 'cable reverse grip triceps pushdown (sz-bar) (with arm blaster)',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1413.gif',
		'name': 'cable reverse one arm curl',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0209.gif',
		'name': 'cable reverse preacher curl',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0210.gif',
		'name': 'cable reverse wrist curl',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0207.gif',
		'name': 'cable reverse-grip pushdown',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0208.gif',
		'name': 'cable reverse-grip straight back seated high row',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1320.gif',
		'name': 'cable rope crossover seated row',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1321.gif',
		'name': 'cable rope elevated seated row',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1322.gif',
		'name': 'cable rope extension incline bench row',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1639.gif',
		'name': 'cable rope hammer preacher curl',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1724.gif',
		'name': 'cable rope high pulley overhead tricep extension',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1725.gif',
		'name': 'cable rope incline tricep extension',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1726.gif',
		'name': 'cable rope lying on floor tricep extension',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1640.gif',
		'name': 'cable rope one arm hammer preacher curl',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1323.gif',
		'name': 'cable rope seated row',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0211.gif',
		'name': 'cable russian twists (on stability ball)',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/2144.gif',
		'name': 'cable seated chest press',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0212.gif',
		'name': 'cable seated crunch',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1641.gif',
		'name': 'cable seated curl',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0213.gif',
		'name': 'cable seated high row (v-bar)',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0214.gif',
		'name': 'cable seated one arm alternate row',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1642.gif',
		'name': 'cable seated one arm concentration curl',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1643.gif',
		'name': 'cable seated overhead curl',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0215.gif',
		'name': 'cable seated rear lateral raise',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0861.gif',
		'name': 'cable seated row',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0216.gif',
		'name': 'cable seated shoulder internal rotation',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/2399.gif',
		'name': 'cable seated twist',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0218.gif',
		'name': 'cable seated wide-grip row',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0219.gif',
		'name': 'cable shoulder press',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0220.gif',
		'name': 'cable shrug',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0222.gif',
		'name': 'cable side bend',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0221.gif',
		'name': 'cable side bend crunch (bosu ball)',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0223.gif',
		'name': 'cable side crunch',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1717.gif',
		'name': 'cable squat row (with rope attachment)',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1644.gif',
		'name': 'cable squatting curl',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0224.gif',
		'name': 'cable standing back wrist curl',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1375.gif',
		'name': 'cable standing calf raise',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0225.gif',
		'name': 'cable standing cross-over high reverse fly',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0226.gif',
		'name': 'cable standing crunch',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0874.gif',
		'name': 'cable standing crunch (with rope attachment)',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0227.gif',
		'name': 'cable standing fly',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0228.gif',
		'name': 'cable standing hip extension',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0229.gif',
		'name': 'cable standing inner curl',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0230.gif',
		'name': 'cable standing lift',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0231.gif',
		'name': 'cable standing one arm triceps extension',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1376.gif',
		'name': 'cable standing one leg calf raise',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0232.gif',
		'name': 'cable standing pulldown (with rope)',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0233.gif',
		'name': 'cable standing rear delt row (with rope)',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1727.gif',
		'name': 'cable standing reverse grip one arm overhead tricep extension',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0234.gif',
		'name': 'cable standing row (v-bar)',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0235.gif',
		'name': 'cable standing shoulder external rotation',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0236.gif',
		'name': 'cable standing twist row (v-bar)',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1269.gif',
		'name': 'cable standing up straight crossovers',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0238.gif',
		'name': 'cable straight arm pulldown',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0237.gif',
		'name': 'cable straight arm pulldown (with rope)',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0239.gif',
		'name': 'cable straight back seated row',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0240.gif',
		'name': 'cable supine reverse fly',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/2464.gif',
		'name': 'cable thibaudeau kayak row',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0241.gif',
		'name': 'cable triceps pushdown (v-bar)',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/2405.gif',
		'name': 'cable triceps pushdown (v-bar) (with arm blaster)',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0242.gif',
		'name': 'cable tuck reverse crunch',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0243.gif',
		'name': 'cable twist',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0862.gif',
		'name': 'cable twist (up-down)',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0244.gif',
		'name': 'cable twisting pull',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1645.gif',
		'name': 'cable two arm curl on incline bench',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1728.gif',
		'name': 'cable two arm tricep kickback',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0245.gif',
		'name': 'cable underhand pulldown',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1270.gif',
		'name': 'cable upper chest crossovers',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1324.gif',
		'name': 'cable upper row',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0246.gif',
		'name': 'cable upright row',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1325.gif',
		'name': 'cable wide grip rear pulldown behind neck',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0247.gif',
		'name': 'cable wrist curl',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1407.gif',
		'name': 'calf push stretch with hands against wall',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1377.gif',
		'name': 'calf stretch with hands against wall',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1378.gif',
		'name': 'calf stretch with rope',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0248.gif',
		'name': 'cambered bar lying row',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/2963.gif',
		'name': 'captains chair straight leg raise',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1548.gif',
		'name': 'chair leg extended stretch',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1271.gif',
		'name': 'chest and front of shoulder stretch',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0251.gif',
		'name': 'chest dip',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1430.gif',
		'name': 'chest dip (on dip-pull-up cage)',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/2462.gif',
		'name': 'chest dip on straight bar',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1272.gif',
		'name': 'chest stretch with exercise ball',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/3216.gif',
		'name': 'chest tap push-up (male)',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1326.gif',
		'name': 'chin-up',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0253.gif',
		'name': 'chin-ups (narrow parallel grip)',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0257.gif',
		'name': 'circles knee stretch',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1273.gif',
		'name': 'clap push up',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0258.gif',
		'name': 'clock push-up',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1327.gif',
		'name': 'close grip chin-up',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0259.gif',
		'name': 'close-grip push-up',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/2398.gif',
		'name': 'close-grip push-up (on knees)',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0260.gif',
		'name': 'cocoons',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1468.gif',
		'name': 'crab twist toe touch',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0262.gif',
		'name': 'cross body crunch',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0267.gif',
		'name': 'crunch (hands overhead)',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0271.gif',
		'name': 'crunch (on stability ball)',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0272.gif',
		'name': 'crunch (on stability ball, arms straight)',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0274.gif',
		'name': 'crunch floor',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/3016.gif',
		'name': 'curl-up',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/3769.gif',
		'name': 'curtsey squat',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/2331.gif',
		'name': 'cycle cross trainer',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0276.gif',
		'name': 'dead bug',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0277.gif',
		'name': 'decline crunch',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0279.gif',
		'name': 'decline push-up',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0282.gif',
		'name': 'decline sit-up',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1274.gif',
		'name': 'deep push up',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0283.gif',
		'name': 'diamond push-up',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0284.gif',
		'name': 'donkey calf raise',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1275.gif',
		'name': 'drop push up',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0285.gif',
		'name': 'dumbbell alternate biceps curl',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/2403.gif',
		'name': 'dumbbell alternate biceps curl (with arm blaster)',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1646.gif',
		'name': 'dumbbell alternate hammer preacher curl',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1647.gif',
		'name': 'dumbbell alternate preacher curl',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1648.gif',
		'name': 'dumbbell alternate seated hammer curl',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0286.gif',
		'name': 'dumbbell alternate side press',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1649.gif',
		'name': 'dumbbell alternating bicep curl with leg raised on exercise ball',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1650.gif',
		'name': 'dumbbell alternating seated bicep curl on exercise ball',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/2137.gif',
		'name': 'dumbbell arnold press',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0287.gif',
		'name': 'dumbbell arnold press v. 2',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0288.gif',
		'name': 'dumbbell around pullover',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0289.gif',
		'name': 'dumbbell bench press',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0290.gif',
		'name': 'dumbbell bench seated press',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0291.gif',
		'name': 'dumbbell bench squat',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0293.gif',
		'name': 'dumbbell bent over row',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1651.gif',
		'name': 'dumbbell bicep curl lunge with bowling motion',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1652.gif',
		'name': 'dumbbell bicep curl on exercise ball with leg raised',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1653.gif',
		'name': 'dumbbell bicep curl with stork stance',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0294.gif',
		'name': 'dumbbell biceps curl',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/2401.gif',
		'name': 'dumbbell biceps curl (with arm blaster)',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1654.gif',
		'name': 'dumbbell biceps curl reverse',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1655.gif',
		'name': 'dumbbell biceps curl squat',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1656.gif',
		'name': 'dumbbell biceps curl v sit on bosu ball',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1201.gif',
		'name': 'dumbbell burpee',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0295.gif',
		'name': 'dumbbell clean',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1731.gif',
		'name': 'dumbbell close grip press',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0296.gif',
		'name': 'dumbbell close-grip press',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0297.gif',
		'name': 'dumbbell concentration curl',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/3635.gif',
		'name': 'dumbbell contralateral forward lunge',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0298.gif',
		'name': 'dumbbell cross body hammer curl',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1657.gif',
		'name': 'dumbbell cross body hammer curl v. 2',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0299.gif',
		'name': 'dumbbell cuban press',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/2136.gif',
		'name': 'dumbbell cuban press v. 2',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0300.gif',
		'name': 'dumbbell deadlift',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0301.gif',
		'name': 'dumbbell decline bench press',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0302.gif',
		'name': 'dumbbell decline fly',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0303.gif',
		'name': 'dumbbell decline hammer press',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1276.gif',
		'name': 'dumbbell decline one arm fly',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1617.gif',
		'name': 'dumbbell decline one arm hammer press',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0305.gif',
		'name': 'dumbbell decline shrug',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0304.gif',
		'name': 'dumbbell decline shrug v. 2',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0306.gif',
		'name': 'dumbbell decline triceps extension',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0307.gif',
		'name': 'dumbbell decline twist fly',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1437.gif',
		'name': 'dumbbell finger curls',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0308.gif',
		'name': 'dumbbell fly',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1277.gif',
		'name': 'dumbbell fly on exercise ball',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1732.gif',
		'name': 'dumbbell forward lunge triceps extension',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0310.gif',
		'name': 'dumbbell front raise',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0309.gif',
		'name': 'dumbbell front raise v. 2',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0311.gif',
		'name': 'dumbbell full can lateral raise',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1760.gif',
		'name': 'dumbbell goblet squat',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0313.gif',
		'name': 'dumbbell hammer curl',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1659.gif',
		'name': 'dumbbell hammer curl on exercise ball',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0312.gif',
		'name': 'dumbbell hammer curl v. 2',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/2402.gif',
		'name': 'dumbbell hammer curls (with arm blaster)',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1664.gif',
		'name': 'dumbbell high curl',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/3545.gif',
		'name': 'dumbbell incline alternate press',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0314.gif',
		'name': 'dumbbell incline bench press',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0315.gif',
		'name': 'dumbbell incline biceps curl',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0316.gif',
		'name': 'dumbbell incline breeding',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0318.gif',
		'name': 'dumbbell incline curl',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0317.gif',
		'name': 'dumbbell incline curl v. 2',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0319.gif',
		'name': 'dumbbell incline fly',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1278.gif',
		'name': 'dumbbell incline fly on exercise ball',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0320.gif',
		'name': 'dumbbell incline hammer curl',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0321.gif',
		'name': 'dumbbell incline hammer press',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1618.gif',
		'name': 'dumbbell incline hammer press on exercise ball',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0322.gif',
		'name': 'dumbbell incline inner biceps curl',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1279.gif',
		'name': 'dumbbell incline one arm fly',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1280.gif',
		'name': 'dumbbell incline one arm fly on exercise ball',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1619.gif',
		'name': 'dumbbell incline one arm hammer press',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1620.gif',
		'name': 'dumbbell incline one arm hammer press on exercise ball',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0323.gif',
		'name': 'dumbbell incline one arm lateral raise',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1281.gif',
		'name': 'dumbbell incline one arm press',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1282.gif',
		'name': 'dumbbell incline one arm press on exercise ball',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0324.gif',
		'name': 'dumbbell incline palm-in press',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1283.gif',
		'name': 'dumbbell incline press on exercise ball',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0325.gif',
		'name': 'dumbbell incline raise',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0326.gif',
		'name': 'dumbbell incline rear lateral raise',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0327.gif',
		'name': 'dumbbell incline row',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0328.gif',
		'name': 'dumbbell incline shoulder raise',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0329.gif',
		'name': 'dumbbell incline shrug',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/3542.gif',
		'name': 'dumbbell incline t-raise',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0330.gif',
		'name': 'dumbbell incline triceps extension',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0331.gif',
		'name': 'dumbbell incline twisted flyes',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1733.gif',
		'name': 'dumbbell incline two arm extension',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/3541.gif',
		'name': 'dumbbell incline y-raise',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0332.gif',
		'name': 'dumbbell iron cross',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0333.gif',
		'name': 'dumbbell kickback',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1734.gif',
		'name': 'dumbbell kickbacks on exercise ball',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1660.gif',
		'name': 'dumbbell kneeling bicep curl exercise ball',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0334.gif',
		'name': 'dumbbell lateral raise',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0335.gif',
		'name': 'dumbbell lateral to front raise',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0336.gif',
		'name': 'dumbbell lunge',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1658.gif',
		'name': 'dumbbell lunge with bicep curl',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0337.gif',
		'name': 'dumbbell lying  extension (across face)',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1729.gif',
		'name': 'dumbbell lying alternate extension',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0338.gif',
		'name': 'dumbbell lying elbow press',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0863.gif',
		'name': 'dumbbell lying external shoulder rotation',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0339.gif',
		'name': 'dumbbell lying femoral',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0340.gif',
		'name': 'dumbbell lying hammer press',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/2470.gif',
		'name': 'dumbbell lying on floor rear delt raise',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0341.gif',
		'name': 'dumbbell lying one arm deltoid rear',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0343.gif',
		'name': 'dumbbell lying one arm press',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0342.gif',
		'name': 'dumbbell lying one arm press v. 2',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0344.gif',
		'name': 'dumbbell lying one arm pronated triceps extension',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0345.gif',
		'name': 'dumbbell lying one arm rear lateral raise',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0346.gif',
		'name': 'dumbbell lying one arm supinated triceps extension',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0347.gif',
		'name': 'dumbbell lying pronation',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/2705.gif',
		'name': 'dumbbell lying pronation on floor',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1284.gif',
		'name': 'dumbbell lying pullover on exercise ball',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1328.gif',
		'name': 'dumbbell lying rear delt row',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0348.gif',
		'name': 'dumbbell lying rear lateral raise',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1735.gif',
		'name': 'dumbbell lying single extension',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0349.gif',
		'name': 'dumbbell lying supination',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/2706.gif',
		'name': 'dumbbell lying supination on floor',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1661.gif',
		'name': 'dumbbell lying supine biceps curl',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0350.gif',
		'name': 'dumbbell lying supine curl',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0351.gif',
		'name': 'dumbbell lying triceps extension',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1662.gif',
		'name': 'dumbbell lying wide curl',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0352.gif',
		'name': 'dumbbell neutral grip bench press',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1285.gif',
		'name': 'dumbbell one arm bench fly',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0292.gif',
		'name': 'dumbbell one arm bent-over row',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1286.gif',
		'name': 'dumbbell one arm chest fly on exercise ball',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0353.gif',
		'name': 'dumbbell one arm concetration curl (on stability ball)',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1287.gif',
		'name': 'dumbbell one arm decline chest press',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1288.gif',
		'name': 'dumbbell one arm fly on exercise ball',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1736.gif',
		'name': 'dumbbell one arm french press on exercise ball',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1663.gif',
		'name': 'dumbbell one arm hammer preacher curl',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1621.gif',
		'name': 'dumbbell one arm hammer press on exercise ball',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1289.gif',
		'name': 'dumbbell one arm incline chest press',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0354.gif',
		'name': 'dumbbell one arm kickback',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0355.gif',
		'name': 'dumbbell one arm lateral raise',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0356.gif',
		'name': 'dumbbell one arm lateral raise with support',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1290.gif',
		'name': 'dumbbell one arm press on exercise ball',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1665.gif',
		'name': 'dumbbell one arm prone curl',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1666.gif',
		'name': 'dumbbell one arm prone hammer curl',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1291.gif',
		'name': 'dumbbell one arm pullover on exercise ball',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0358.gif',
		'name': 'dumbbell one arm revers wrist curl',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0359.gif',
		'name': 'dumbbell one arm reverse fly (with support)',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1622.gif',
		'name': 'dumbbell one arm reverse grip press',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1414.gif',
		'name': 'dumbbell one arm reverse preacher curl',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1667.gif',
		'name': 'dumbbell one arm reverse spider curl',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1668.gif',
		'name': 'dumbbell one arm seated bicep curl on exercise ball',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1669.gif',
		'name': 'dumbbell one arm seated hammer curl',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1415.gif',
		'name': 'dumbbell one arm seated neutral wrist curl',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0361.gif',
		'name': 'dumbbell one arm shoulder press',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0360.gif',
		'name': 'dumbbell one arm shoulder press v. 2',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/3888.gif',
		'name': 'dumbbell one arm snatch',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1670.gif',
		'name': 'dumbbell one arm standing curl',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1671.gif',
		'name': 'dumbbell one arm standing hammer curl',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0362.gif',
		'name': 'dumbbell one arm triceps extension (on bench)',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0363.gif',
		'name': 'dumbbell one arm upright row',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0364.gif',
		'name': 'dumbbell one arm wrist curl',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1672.gif',
		'name': 'dumbbell one arm zottman preacher curl',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1292.gif',
		'name': 'dumbbell one leg fly on exercise ball',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0365.gif',
		'name': 'dumbbell over bench neutral wrist curl',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0366.gif',
		'name': 'dumbbell over bench one arm  neutral wrist curl',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1441.gif',
		'name': 'dumbbell over bench one arm reverse wrist curl',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0367.gif',
		'name': 'dumbbell over bench one arm wrist curl',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0368.gif',
		'name': 'dumbbell over bench revers wrist curl',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0369.gif',
		'name': 'dumbbell over bench wrist curl',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1329.gif',
		'name': 'dumbbell palm rotational bent over row',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1623.gif',
		'name': 'dumbbell palms in incline bench press',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0370.gif',
		'name': 'dumbbell peacher hammer curl',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0371.gif',
		'name': 'dumbbell plyo squat',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0372.gif',
		'name': 'dumbbell preacher curl',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1673.gif',
		'name': 'dumbbell preacher curl over exercise ball',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1293.gif',
		'name': 'dumbbell press on exercise ball',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0373.gif',
		'name': 'dumbbell pronate-grip triceps extension',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0374.gif',
		'name': 'dumbbell prone incline curl',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1674.gif',
		'name': 'dumbbell prone incline hammer curl',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0375.gif',
		'name': 'dumbbell pullover',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1294.gif',
		'name': 'dumbbell pullover hip extension on exercise ball',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1295.gif',
		'name': 'dumbbell pullover on exercise ball',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1700.gif',
		'name': 'dumbbell push press',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0376.gif',
		'name': 'dumbbell raise',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/2292.gif',
		'name': 'dumbbell rear delt raise',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0377.gif',
		'name': 'dumbbell rear delt row_shoulder',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0378.gif',
		'name': 'dumbbell rear fly',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0380.gif',
		'name': 'dumbbell rear lateral raise',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0379.gif',
		'name': 'dumbbell rear lateral raise (support head)',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0381.gif',
		'name': 'dumbbell rear lunge',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0382.gif',
		'name': 'dumbbell revers grip biceps curl',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1624.gif',
		'name': 'dumbbell reverse bench press',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0383.gif',
		'name': 'dumbbell reverse fly',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1330.gif',
		'name': 'dumbbell reverse grip incline bench one arm row',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1331.gif',
		'name': 'dumbbell reverse grip incline bench two arm row',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/2327.gif',
		'name': 'dumbbell reverse grip row (female)',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0384.gif',
		'name': 'dumbbell reverse preacher curl',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1675.gif',
		'name': 'dumbbell reverse spider curl',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0385.gif',
		'name': 'dumbbell reverse wrist curl',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1459.gif',
		'name': 'dumbbell romanian deadlift',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0386.gif',
		'name': 'dumbbell rotation reverse fly',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/2397.gif',
		'name': 'dumbbell scott press',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0387.gif',
		'name': 'dumbbell seated alternate front raise',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1676.gif',
		'name': 'dumbbell seated alternate hammer curl on exercise ball',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0388.gif',
		'name': 'dumbbell seated alternate press',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/3546.gif',
		'name': 'dumbbell seated alternate shoulder',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0389.gif',
		'name': 'dumbbell seated bench extension',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/2317.gif',
		'name': 'dumbbell seated bent arm lateral raise',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1730.gif',
		'name': 'dumbbell seated bent over alternate kickback',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1737.gif',
		'name': 'dumbbell seated bent over triceps extension',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1677.gif',
		'name': 'dumbbell seated bicep curl',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0390.gif',
		'name': 'dumbbell seated biceps curl (on stability ball)',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/3547.gif',
		'name': 'dumbbell seated biceps curl to shoulder press',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1379.gif',
		'name': 'dumbbell seated calf raise',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0391.gif',
		'name': 'dumbbell seated curl',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0392.gif',
		'name': 'dumbbell seated front raise',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1678.gif',
		'name': 'dumbbell seated hammer curl',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0393.gif',
		'name': 'dumbbell seated inner biceps curl',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0394.gif',
		'name': 'dumbbell seated kickback',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0396.gif',
		'name': 'dumbbell seated lateral raise',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0395.gif',
		'name': 'dumbbell seated lateral raise v. 2',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0397.gif',
		'name': 'dumbbell seated neutral wrist curl',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1679.gif',
		'name': 'dumbbell seated one arm bicep curl on exercise ball with leg raised',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0398.gif',
		'name': 'dumbbell seated one arm kickback',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0399.gif',
		'name': 'dumbbell seated one arm rotate',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0400.gif',
		'name': 'dumbbell seated one leg calf raise',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1380.gif',
		'name': 'dumbbell seated one leg calf raise - hammer grip',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1381.gif',
		'name': 'dumbbell seated one leg calf raise - palm up',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0401.gif',
		'name': 'dumbbell seated palms up wrist curl',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0402.gif',
		'name': 'dumbbell seated preacher curl',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0403.gif',
		'name': 'dumbbell seated revers grip concentration curl',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1738.gif',
		'name': 'dumbbell seated reverse grip one arm overhead tricep extension',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0405.gif',
		'name': 'dumbbell seated shoulder press',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0404.gif',
		'name': 'dumbbell seated shoulder press (parallel grip)',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/2188.gif',
		'name': 'dumbbell seated triceps extension',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0406.gif',
		'name': 'dumbbell shrug',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0407.gif',
		'name': 'dumbbell side bend',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0408.gif',
		'name': 'dumbbell side lying one hand raise',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/3664.gif',
		'name': 'dumbbell side plank with rear fly',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/3548.gif',
		'name': 'dumbbell single arm overhead carry',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0409.gif',
		'name': 'dumbbell single leg calf raise',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1757.gif',
		'name': 'dumbbell single leg deadlift',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/2805.gif',
		'name': 'dumbbell single leg deadlift with stepbox support',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0410.gif',
		'name': 'dumbbell single leg split squat',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0411.gif',
		'name': 'dumbbell single leg squat',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0413.gif',
		'name': 'dumbbell squat',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/3560.gif',
		'name': 'dumbbell standing alternate hammer curl and press',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0414.gif',
		'name': 'dumbbell standing alternate overhead press',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0415.gif',
		'name': 'dumbbell standing alternate raise',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1739.gif',
		'name': 'dumbbell standing alternating tricep kickback',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/2143.gif',
		'name': 'dumbbell standing around world',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1740.gif',
		'name': 'dumbbell standing bent over one arm triceps extension',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1741.gif',
		'name': 'dumbbell standing bent over two arm triceps extension',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0416.gif',
		'name': 'dumbbell standing biceps curl',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0417.gif',
		'name': 'dumbbell standing calf raise',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0418.gif',
		'name': 'dumbbell standing concentration curl',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0419.gif',
		'name': 'dumbbell standing front raise above head',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/2321.gif',
		'name': 'dumbbell standing inner biceps curl v. 2',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0420.gif',
		'name': 'dumbbell standing kickback',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0421.gif',
		'name': 'dumbbell standing one arm concentration curl',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0422.gif',
		'name': 'dumbbell standing one arm curl (over incline bench)',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1680.gif',
		'name': 'dumbbell standing one arm curl over incline bench',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0423.gif',
		'name': 'dumbbell standing one arm extension',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0424.gif',
		'name': 'dumbbell standing one arm palm in press',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0425.gif',
		'name': 'dumbbell standing one arm reverse curl',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0426.gif',
		'name': 'dumbbell standing overhead press',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0427.gif',
		'name': 'dumbbell standing palms in press',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0428.gif',
		'name': 'dumbbell standing preacher curl',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0429.gif',
		'name': 'dumbbell standing reverse curl',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0430.gif',
		'name': 'dumbbell standing triceps extension',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/2293.gif',
		'name': 'dumbbell standing zottman preacher curl',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1684.gif',
		'name': 'dumbbell step up single leg balance with bicep curl',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0431.gif',
		'name': 'dumbbell step-up',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/2796.gif',
		'name': 'dumbbell step-up lunge',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/2812.gif',
		'name': 'dumbbell step-up split squat',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0432.gif',
		'name': 'dumbbell stiff leg deadlift',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0433.gif',
		'name': 'dumbbell straight arm pullover',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0434.gif',
		'name': 'dumbbell straight leg deadlift',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/2808.gif',
		'name': 'dumbbell sumo pull through',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/2803.gif',
		'name': 'dumbbell supported squat',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0436.gif',
		'name': 'dumbbell tate press',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1742.gif',
		'name': 'dumbbell tricep kickback with stork stance',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1743.gif',
		'name': 'dumbbell twisting bench press',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0437.gif',
		'name': 'dumbbell upright row',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1765.gif',
		'name': 'dumbbell upright row (back pov)',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0864.gif',
		'name': 'dumbbell upright shoulder external rotation',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/5201.gif',
		'name': 'dumbbell waiter biceps curl',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0438.gif',
		'name': 'dumbbell w-press',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0439.gif',
		'name': 'dumbbell zottman curl',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/2294.gif',
		'name': 'dumbbell zottman preacher curl',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/2189.gif',
		'name': 'dumbbells seated triceps extension',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1167.gif',
		'name': 'dynamic chest stretch (male)',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/3287.gif',
		'name': 'elbow dips',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1772.gif',
		'name': 'elbow lift - reverse push-up',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0443.gif',
		'name': 'elbow-to-knee',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/3292.gif',
		'name': 'elevator',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1332.gif',
		'name': 'exercise ball alternating arm ups',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1333.gif',
		'name': 'exercise ball back extension with arms extended',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1334.gif',
		'name': 'exercise ball back extension with hands behind head',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1335.gif',
		'name': 'exercise ball back extension with knees off ground',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1336.gif',
		'name': 'exercise ball back extension with rotation',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1744.gif',
		'name': 'exercise ball dip',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1559.gif',
		'name': 'exercise ball hip flexor stretch',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1338.gif',
		'name': 'exercise ball hug',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1339.gif',
		'name': 'exercise ball lat stretch',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1341.gif',
		'name': 'exercise ball lower back stretch (pyramid)',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1342.gif',
		'name': 'exercise ball lying side lat stretch',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1382.gif',
		'name': 'exercise ball on the wall calf raise',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/3241.gif',
		'name': 'exercise ball on the wall calf raise (tennis ball between ankles)',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/3240.gif',
		'name': 'exercise ball on the wall calf raise (tennis ball between knees)',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1416.gif',
		'name': 'exercise ball one leg prone lower body rotation',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1417.gif',
		'name': 'exercise ball one legged diagonal kick hamstring curl',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1296.gif',
		'name': 'exercise ball pike push up',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1343.gif',
		'name': 'exercise ball prone leg raise',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1560.gif',
		'name': 'exercise ball seated hamstring stretch',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1745.gif',
		'name': 'exercise ball seated triceps stretch',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1746.gif',
		'name': 'exercise ball supine triceps extension',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1747.gif',
		'name': 'ez bar french press on exercise ball',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/3010.gif',
		'name': 'ez bar lying bent arms pullover',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1748.gif',
		'name': 'ez bar lying close grip triceps extension behind head',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1344.gif',
		'name': 'ez bar reverse grip bent over row',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1682.gif',
		'name': 'ez bar seated close grip concentration curl',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1749.gif',
		'name': 'ez bar standing french press',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0445.gif',
		'name': 'ez barbell anti gravity press',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1627.gif',
		'name': 'ez barbell close grip preacher curl',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0446.gif',
		'name': 'ez barbell close-grip curl',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0447.gif',
		'name': 'ez barbell curl',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0448.gif',
		'name': 'ez barbell decline close grip face press',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/2186.gif',
		'name': 'ez barbell decline triceps extension',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0449.gif',
		'name': 'ez barbell incline triceps extension',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0450.gif',
		'name': 'ez barbell jm bench press',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0451.gif',
		'name': 'ez barbell reverse grip curl',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0452.gif',
		'name': 'ez barbell reverse grip preacher curl',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1458.gif',
		'name': 'ez barbell seated curls',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0453.gif',
		'name': 'ez barbell seated triceps extension',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0454.gif',
		'name': 'ez barbell spider curl',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1628.gif',
		'name': 'ez barbell spider curl',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/2404.gif',
		'name': 'ez-bar biceps curl (with arm blaster)',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/2432.gif',
		'name': 'ez-bar close-grip bench press',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/2741.gif',
		'name': 'ez-barbell standing wide grip biceps curl',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/2133.gif',
		'name': 'farmers walk',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0455.gif',
		'name': 'finger curls',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/3303.gif',
		'name': 'flag',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0456.gif',
		'name': 'flexion leg sit up (bent knee)',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0457.gif',
		'name': 'flexion leg sit up (straight arm)',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0458.gif',
		'name': 'floor fly (with barbell)',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0459.gif',
		'name': 'flutter kicks',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1472.gif',
		'name': 'forward jump',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/3470.gif',
		'name': 'forward lunge (male)',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/3194.gif',
		'name': 'frankenstein squat',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/2429.gif',
		'name': 'frog crunch',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/3301.gif',
		'name': 'frog planche',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/3296.gif',
		'name': 'front lever',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/3295.gif',
		'name': 'front lever reps',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0464.gif',
		'name': 'front plank with twist',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/3315.gif',
		'name': 'full maltese',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/3299.gif',
		'name': 'full planche',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/3327.gif',
		'name': 'full planche push-up',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0466.gif',
		'name': 'gironda sternum chin',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/3561.gif',
		'name': 'glute bridge march',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/3523.gif',
		'name': 'glute bridge two legs on bench (male)',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/3193.gif',
		'name': 'glute-ham raise',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0467.gif',
		'name': 'gorilla chin',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0469.gif',
		'name': 'groin crunch',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1383.gif',
		'name': 'hack calf raise',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1384.gif',
		'name': 'hack one leg calf raise',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/3221.gif',
		'name': 'half knee bends (male)',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/3202.gif',
		'name': 'half sit-up (male)',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1511.gif',
		'name': 'hamstring stretch',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/2139.gif',
		'name': 'hands bike',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/3218.gif',
		'name': 'hands clasped circular toe touch (male)',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/3215.gif',
		'name': 'hands reversed clasped circular toe touch (male)',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/3302.gif',
		'name': 'handstand',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0471.gif',
		'name': 'handstand push-up',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1764.gif',
		'name': 'hanging leg hip raise',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0472.gif',
		'name': 'hanging leg raise',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1761.gif',
		'name': 'hanging oblique knee raise',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0473.gif',
		'name': 'hanging pike',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0474.gif',
		'name': 'hanging straight leg hip raise',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0475.gif',
		'name': 'hanging straight leg raise',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0476.gif',
		'name': 'hanging straight twisting leg hip raise',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/3636.gif',
		'name': 'high knee against wall',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0484.gif',
		'name': 'hip raise (bent knee)',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1418.gif',
		'name': 'hug keens to chest',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/3234.gif',
		'name': 'hyght dumbbell fly',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0489.gif',
		'name': 'hyperextension',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0488.gif',
		'name': 'hyperextension (on bench)',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/3289.gif',
		'name': 'impossible dips',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1471.gif',
		'name': 'inchworm',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/3698.gif',
		'name': 'inchworm v. 2',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0490.gif',
		'name': 'incline close-grip push-up',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0491.gif',
		'name': 'incline leg hip raise (leg straight)',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0492.gif',
		'name': 'incline push up depth jump',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0493.gif',
		'name': 'incline push-up',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/3785.gif',
		'name': 'incline push-up (on box)',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0494.gif',
		'name': 'incline reverse grip push-up',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/3011.gif',
		'name': 'incline scapula push up',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0495.gif',
		'name': 'incline twisting sit-up',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1564.gif',
		'name': 'intermediate hip flexor and quad stretch',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0496.gif',
		'name': 'inverse leg curl (bench support)',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/2400.gif',
		'name': 'inverse leg curl (on pull-up cable machine)',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0499.gif',
		'name': 'inverted row',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/2300.gif',
		'name': 'inverted row bent knees',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/2298.gif',
		'name': 'inverted row on bench',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0497.gif',
		'name': 'inverted row v. 2',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0498.gif',
		'name': 'inverted row with straps',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1419.gif',
		'name': 'iron cross stretch',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1297.gif',
		'name': 'isometric chest squeeze',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0500.gif',
		'name': 'isometric wipers',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0501.gif',
		'name': 'jack burpee',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/3224.gif',
		'name': 'jack jump (male)',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0507.gif',
		'name': 'jackknife sit-up',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0508.gif',
		'name': 'janda sit-up',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/2612.gif',
		'name': 'jump rope',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0514.gif',
		'name': 'jump squat',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0513.gif',
		'name': 'jump squat v. 2',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0517.gif',
		'name': 'kettlebell advanced windmill',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0518.gif',
		'name': 'kettlebell alternating hang clean',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0520.gif',
		'name': 'kettlebell alternating press',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0519.gif',
		'name': 'kettlebell alternating press on floor',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0521.gif',
		'name': 'kettlebell alternating renegade row',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0522.gif',
		'name': 'kettlebell alternating row',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0523.gif',
		'name': 'kettlebell arnold press',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0524.gif',
		'name': 'kettlebell bent press',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0525.gif',
		'name': 'kettlebell bottoms up clean from the hang position',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0526.gif',
		'name': 'kettlebell double alternating hang clean',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0527.gif',
		'name': 'kettlebell double jerk',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0528.gif',
		'name': 'kettlebell double push press',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0529.gif',
		'name': 'kettlebell double snatch',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0530.gif',
		'name': 'kettlebell double windmill',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0531.gif',
		'name': 'kettlebell extended range one arm press on floor',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0532.gif',
		'name': 'kettlebell figure 8',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0533.gif',
		'name': 'kettlebell front squat',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0534.gif',
		'name': 'kettlebell goblet squat',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0535.gif',
		'name': 'kettlebell hang clean',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0536.gif',
		'name': 'kettlebell lunge pass through',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0537.gif',
		'name': 'kettlebell one arm clean and jerk',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1298.gif',
		'name': 'kettlebell one arm floor press',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0538.gif',
		'name': 'kettlebell one arm jerk',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0539.gif',
		'name': 'kettlebell one arm military press to the side',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0540.gif',
		'name': 'kettlebell one arm push press',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0541.gif',
		'name': 'kettlebell one arm row',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0542.gif',
		'name': 'kettlebell one arm snatch',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0543.gif',
		'name': 'kettlebell pirate supper legs',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0544.gif',
		'name': 'kettlebell pistol squat',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0545.gif',
		'name': 'kettlebell plyo push-up',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0546.gif',
		'name': 'kettlebell seated press',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1438.gif',
		'name': 'kettlebell seated two arm military press',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0547.gif',
		'name': 'kettlebell seesaw press',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0548.gif',
		'name': 'kettlebell sumo high pull',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0549.gif',
		'name': 'kettlebell swing',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0550.gif',
		'name': 'kettlebell thruster',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0551.gif',
		'name': 'kettlebell turkish get up (squat style)',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0552.gif',
		'name': 'kettlebell two arm clean',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0553.gif',
		'name': 'kettlebell two arm military press',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1345.gif',
		'name': 'kettlebell two arm row',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0554.gif',
		'name': 'kettlebell windmill',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0555.gif',
		'name': 'kick out sit',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0558.gif',
		'name': 'kipping muscle up',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/3640.gif',
		'name': 'knee touch crunch',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1420.gif',
		'name': 'kneeling jump squat',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1346.gif',
		'name': 'kneeling lat stretch',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/3239.gif',
		'name': 'kneeling plank tap shoulder (male)',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/3211.gif',
		'name': 'kneeling push-up (male)',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/3288.gif',
		'name': 'korean dips',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/3418.gif',
		'name': 'l-pull-up',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/3419.gif',
		'name': 'l-sit on floor',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0562.gif',
		'name': 'landmine 180',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/3237.gif',
		'name': 'landmine lateral raise',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/3300.gif',
		'name': 'lean planche',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/2271.gif',
		'name': 'left hook. boxing',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0570.gif',
		'name': 'leg pull in flat bench',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1576.gif',
		'name': 'leg up hamstring stretch',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/2287.gif',
		'name': 'lever alternate leg press ',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0571.gif',
		'name': 'lever alternating narrow grip seated row ',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0572.gif',
		'name': 'lever assisted chin-up',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0573.gif',
		'name': 'lever back extension',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0574.gif',
		'name': 'lever bent over row ',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/3200.gif',
		'name': 'lever bent-over row with v-bar ',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0575.gif',
		'name': 'lever bicep curl',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/2289.gif',
		'name': 'lever calf press ',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0577.gif',
		'name': 'lever chest press',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0576.gif',
		'name': 'lever chest press ',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1455.gif',
		'name': 'lever chest press v. 2',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0578.gif',
		'name': 'lever deadlift ',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1300.gif',
		'name': 'lever decline chest press',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1253.gif',
		'name': 'lever donkey calf raise',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0579.gif',
		'name': 'lever front pulldown',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0580.gif',
		'name': 'lever gripless shrug',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1439.gif',
		'name': 'lever gripless shrug v. 2',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/2288.gif',
		'name': 'lever gripper hands ',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1615.gif',
		'name': 'lever hammer grip preacher curl',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0581.gif',
		'name': 'lever high row ',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/2286.gif',
		'name': 'lever hip extension v. 2',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/2611.gif',
		'name': 'lever horizontal one leg press',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1299.gif',
		'name': 'lever incline chest press',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1479.gif',
		'name': 'lever incline chest press v. 2',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0582.gif',
		'name': 'lever kneeling leg curl ',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0583.gif',
		'name': 'lever kneeling twist',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0584.gif',
		'name': 'lever lateral raise',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0585.gif',
		'name': 'lever leg extension',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0586.gif',
		'name': 'lever lying leg curl',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/3195.gif',
		'name': 'lever lying two-one leg curl',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0587.gif',
		'name': 'lever military press ',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0588.gif',
		'name': 'lever narrow grip seated row ',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0589.gif',
		'name': 'lever one arm bent over row ',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1356.gif',
		'name': 'lever one arm lateral high row',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1347.gif',
		'name': 'lever one arm lateral wide pulldown ',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0590.gif',
		'name': 'lever one arm shoulder press ',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0591.gif',
		'name': 'lever overhand triceps dip',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0592.gif',
		'name': 'lever preacher curl',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1614.gif',
		'name': 'lever preacher curl v. 2',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/2285.gif',
		'name': 'lever pullover ',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/2736.gif',
		'name': 'lever reverse grip lateral pulldown ',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1616.gif',
		'name': 'lever reverse grip preacher curl',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1348.gif',
		'name': 'lever reverse grip vertical row',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0593.gif',
		'name': 'lever reverse hyperextension ',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1349.gif',
		'name': 'lever reverse t-bar row',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/2315.gif',
		'name': 'lever rotary calf',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/2335.gif',
		'name': 'lever seated calf press',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0594.gif',
		'name': 'lever seated calf raise ',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1452.gif',
		'name': 'lever seated crunch',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0595.gif',
		'name': 'lever seated crunch (chest pad)',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/3760.gif',
		'name': 'lever seated crunch v. 2',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1451.gif',
		'name': 'lever seated dip',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0596.gif',
		'name': 'lever seated fly',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/3759.gif',
		'name': 'lever seated good morning',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0597.gif',
		'name': 'lever seated hip abduction',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0598.gif',
		'name': 'lever seated hip adduction',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0599.gif',
		'name': 'lever seated leg curl',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0600.gif',
		'name': 'lever seated leg raise crunch ',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0602.gif',
		'name': 'lever seated reverse fly',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0601.gif',
		'name': 'lever seated reverse fly (parallel grip)',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1350.gif',
		'name': 'lever seated row',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1454.gif',
		'name': 'lever seated shoulder press',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1385.gif',
		'name': 'lever seated squat calf raise on leg press machine',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1453.gif',
		'name': 'lever seated twist',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0603.gif',
		'name': 'lever shoulder press ',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0869.gif',
		'name': 'lever shoulder press  v. 2',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/2318.gif',
		'name': 'lever shoulder press  v. 3',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0604.gif',
		'name': 'lever shrug ',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0605.gif',
		'name': 'lever standing calf raise',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/3758.gif',
		'name': 'lever standing chest press',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0606.gif',
		'name': 'lever t bar row ',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1351.gif',
		'name': 'lever t-bar reverse grip row',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0607.gif',
		'name': 'lever triceps extension',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1313.gif',
		'name': 'lever unilateral row',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0609.gif',
		'name': 'london bridge',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/3013.gif',
		'name': 'low glute bridge on floor',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1352.gif',
		'name': 'lower back curl',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/3582.gif',
		'name': 'lunge with jump',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1688.gif',
		'name': 'lunge with twist',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0613.gif',
		'name': 'lying (side) quads stretch',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/2312.gif',
		'name': 'lying elbow to knee',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0620.gif',
		'name': 'lying leg raise flat bench',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0865.gif',
		'name': 'lying leg-hip raise',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1301.gif',
		'name': 'machine inner chest press',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0624.gif',
		'name': 'march sit (wall)',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1353.gif',
		'name': 'medicine ball catch and overhead throw',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1302.gif',
		'name': 'medicine ball chest pass',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1303.gif',
		'name': 'medicine ball chest push from 3 point stance',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1304.gif',
		'name': 'medicine ball chest push multiple response',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1305.gif',
		'name': 'medicine ball chest push single response',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1312.gif',
		'name': 'medicine ball chest push with run release',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1701.gif',
		'name': 'medicine ball close grip push up',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1354.gif',
		'name': 'medicine ball overhead slam',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1750.gif',
		'name': 'medicine ball supine chest throw',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0627.gif',
		'name': 'mixed grip chin-up',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/3217.gif',
		'name': 'modified hindu push-up (male)',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1421.gif',
		'name': 'modified push up to lower arms',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0628.gif',
		'name': 'monster walk',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0630.gif',
		'name': 'mountain climber',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0631.gif',
		'name': 'muscle up',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1401.gif',
		'name': 'muscle-up (on vertical bar)',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/2328.gif',
		'name': 'narrow push-up on exercise ball',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1403.gif',
		'name': 'neck side stretch',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0634.gif',
		'name': 'negative crunch',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1495.gif',
		'name': 'oblique crunch v. 2',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0635.gif',
		'name': 'oblique crunches floor',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0636.gif',
		'name': 'olympic barbell hammer curl',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0637.gif',
		'name': 'olympic barbell triceps extension',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1355.gif',
		'name': 'one arm against wall',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0638.gif',
		'name': 'one arm chin-up',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0639.gif',
		'name': 'one arm dip',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0640.gif',
		'name': 'one arm slam (with medicine ball)',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1773.gif',
		'name': 'one arm towel row',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1386.gif',
		'name': 'one leg donkey calf raise',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1387.gif',
		'name': 'one leg floor calf raise',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1476.gif',
		'name': 'one leg squat',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0641.gif',
		'name': 'otis up',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0642.gif',
		'name': 'outside leg kick push-up',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0643.gif',
		'name': 'overhead triceps stretch',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/3147.gif',
		'name': 'pelvic tilt',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1422.gif',
		'name': 'pelvic tilt into bridge',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1388.gif',
		'name': 'peroneals stretch',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/3662.gif',
		'name': 'pike-to-cobra push-up',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1306.gif',
		'name': 'plyo push up',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1687.gif',
		'name': 'posterior step to overhead reach',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1389.gif',
		'name': 'posterior tibialis stretch',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/3119.gif',
		'name': 'potty squat',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/3132.gif',
		'name': 'potty squat with support',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0648.gif',
		'name': 'power clean',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/3665.gif',
		'name': 'power point plank',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/3203.gif',
		'name': 'prisoner half sit-up (male)',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1707.gif',
		'name': 'prone twist on stability ball',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0651.gif',
		'name': 'pull up (neutral grip)',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0650.gif',
		'name': 'pull-in (on stability ball)',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0652.gif',
		'name': 'pull-up',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1689.gif',
		'name': 'push and pull bodyweight',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/3638.gif',
		'name': 'push to run',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1307.gif',
		'name': 'push up on bosu ball',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0662.gif',
		'name': 'push-up',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0653.gif',
		'name': 'push-up (bosu ball)',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0655.gif',
		'name': 'push-up (on stability ball)',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0656.gif',
		'name': 'push-up (on stability ball)',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0659.gif',
		'name': 'push-up (wall)',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0658.gif',
		'name': 'push-up (wall) v. 2',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0660.gif',
		'name': 'push-up close-grip off dumbbell',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0661.gif',
		'name': 'push-up inside leg kick',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0663.gif',
		'name': 'push-up medicine ball',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1467.gif',
		'name': 'push-up on lower arms',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/3145.gif',
		'name': 'push-up plus',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0664.gif',
		'name': 'push-up to side plank',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/3533.gif',
		'name': 'quads',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/3201.gif',
		'name': 'quarter sit-up',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/3552.gif',
		'name': 'quick feet v. 2',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0666.gif',
		'name': 'raise single arm push-up',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0668.gif',
		'name': 'rear decline bridge',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0669.gif',
		'name': 'rear deltoid stretch',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0670.gif',
		'name': 'rear pull-up',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1582.gif',
		'name': 'reclining big toe pose with rope',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/3236.gif',
		'name': 'resistance band hip thrusts on knees (female)',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/3007.gif',
		'name': 'resistance band leg extension',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/3123.gif',
		'name': 'resistance band seated biceps curl',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/3124.gif',
		'name': 'resistance band seated chest press',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/3006.gif',
		'name': 'resistance band seated hip abduction',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/3122.gif',
		'name': 'resistance band seated shoulder press',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/3144.gif',
		'name': 'resistance band seated straight back row',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0872.gif',
		'name': 'reverse crunch',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0672.gif',
		'name': 'reverse dip',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0673.gif',
		'name': 'reverse grip machine lat pulldown',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0674.gif',
		'name': 'reverse grip pull-up',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0675.gif',
		'name': 'reverse hyper extension (on stability ball)',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1423.gif',
		'name': 'reverse hyper on flat bench',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/3663.gif',
		'name': 'reverse plank with leg lift',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0677.gif',
		'name': 'ring dips',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/2571.gif',
		'name': 'rocking frog stretch',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0678.gif',
		'name': 'rocky pull-up pulldown',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/2208.gif',
		'name': 'roller back stretch',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/2204.gif',
		'name': 'roller body saw',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/2205.gif',
		'name': 'roller hip lat stretch',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/2202.gif',
		'name': 'roller hip stretch',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/2206.gif',
		'name': 'roller reverse crunch',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/2203.gif',
		'name': 'roller seated shoulder flexor depresor retractor',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/2209.gif',
		'name': 'roller seated single leg shoulder flexor depresor retractor',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/2207.gif',
		'name': 'roller side lat stretch',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0680.gif',
		'name': 'rope climb',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0685.gif',
		'name': 'run',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0684.gif',
		'name': 'run (equipment)',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1585.gif',
		'name': 'runners stretch',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0687.gif',
		'name': 'russian twist',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/3012.gif',
		'name': 'scapula dips',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/3021.gif',
		'name': 'scapula push-up',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0688.gif',
		'name': 'scapular pull-up',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/3219.gif',
		'name': 'scissor jumps (male)',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1390.gif',
		'name': 'seated calf stretch (male)',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1424.gif',
		'name': 'seated glute stretch',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0689.gif',
		'name': 'seated leg raise',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0690.gif',
		'name': 'seated lower back stretch',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/2567.gif',
		'name': 'seated piriformis stretch',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0691.gif',
		'name': 'seated side crunch (wall)',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1587.gif',
		'name': 'seated wide angle pose sequence',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0697.gif',
		'name': 'self assisted inverse leg curl',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1766.gif',
		'name': 'self assisted inverse leg curl',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0696.gif',
		'name': 'self assisted inverse leg curl (on floor)',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/3222.gif',
		'name': 'semi squat jump (male)',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/3656.gif',
		'name': 'short stride run',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1763.gif',
		'name': 'shoulder grip pull-up',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/3699.gif',
		'name': 'shoulder tap',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0699.gif',
		'name': 'shoulder tap push-up',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1774.gif',
		'name': 'side bridge hip abduction',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0705.gif',
		'name': 'side bridge v. 2',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0709.gif',
		'name': 'side hip (on parallel bars)',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0710.gif',
		'name': 'side hip abduction',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1358.gif',
		'name': 'side lying floor stretch',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/3667.gif',
		'name': 'side lying hip adduction (male)',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1775.gif',
		'name': 'side plank hip adduction',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0716.gif',
		'name': 'side push neck stretch',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0717.gif',
		'name': 'side push-up',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0721.gif',
		'name': 'side wrist pull stretch',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0720.gif',
		'name': 'side-to-side chin',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/3213.gif',
		'name': 'side-to-side toe touch (male)',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0725.gif',
		'name': 'single arm push-up',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/3645.gif',
		'name': 'single leg bridge with outstretched leg',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0727.gif',
		'name': 'single leg calf raise (on a dumbbell)',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0730.gif',
		'name': 'single leg platform slide',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1759.gif',
		'name': 'single leg squat (pistol) male',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1489.gif',
		'name': 'sissy squat',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0735.gif',
		'name': 'sit-up v. 2',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/3679.gif',
		'name': 'sit-up with arms on chest',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/3361.gif',
		'name': 'skater hops',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/2142.gif',
		'name': 'ski ergometer',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/3671.gif',
		'name': 'ski step',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/3304.gif',
		'name': 'skin the cat',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1425.gif',
		'name': 'sled 45 degrees one leg press',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0738.gif',
		'name': 'sled 45в° calf press',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0739.gif',
		'name': 'sled 45в° leg press',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1464.gif',
		'name': 'sled 45в° leg press (back pov)',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1463.gif',
		'name': 'sled 45в° leg press (side pov)',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0740.gif',
		'name': 'sled 45в° leg wide press',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1391.gif',
		'name': 'sled calf press on leg press',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0741.gif',
		'name': 'sled closer hack squat',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0742.gif',
		'name': 'sled forward angled calf raise',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0743.gif',
		'name': 'sled hack squat',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/2334.gif',
		'name': 'sled lying calf press',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0744.gif',
		'name': 'sled lying squat',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1392.gif',
		'name': 'sled one leg calf press on leg press',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1496.gif',
		'name': 'sledge hammer',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0746.gif',
		'name': 'smith back shrug',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0747.gif',
		'name': 'smith behind neck press',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0748.gif',
		'name': 'smith bench press',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0749.gif',
		'name': 'smith bent knee good morning',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1359.gif',
		'name': 'smith bent over row',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0750.gif',
		'name': 'smith chair squat',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0751.gif',
		'name': 'smith close-grip bench press',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0752.gif',
		'name': 'smith deadlift',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0753.gif',
		'name': 'smith decline bench press',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0754.gif',
		'name': 'smith decline reverse-grip press',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1433.gif',
		'name': 'smith front squat (clean grip)',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/3281.gif',
		'name': 'smith full squat',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0755.gif',
		'name': 'smith hack squat',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0756.gif',
		'name': 'smith hip raise',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0757.gif',
		'name': 'smith incline bench press',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0758.gif',
		'name': 'smith incline reverse-grip press',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0759.gif',
		'name': 'smith incline shoulder raises',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0760.gif',
		'name': 'smith leg press',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1434.gif',
		'name': 'smith low bar squat',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1683.gif',
		'name': 'smith machine bicep curl',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1625.gif',
		'name': 'smith machine decline close grip bench press',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1752.gif',
		'name': 'smith machine incline tricep extension',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1626.gif',
		'name': 'smith machine reverse decline close grip bench press',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0761.gif',
		'name': 'smith narrow row',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1360.gif',
		'name': 'smith one arm row',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1393.gif',
		'name': 'smith one leg floor calf raise',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0762.gif',
		'name': 'smith rear delt row',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0763.gif',
		'name': 'smith reverse calf raises',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1394.gif',
		'name': 'smith reverse calf raises',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1361.gif',
		'name': 'smith reverse grip bent over row',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0764.gif',
		'name': 'smith reverse-grip press',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1395.gif',
		'name': 'smith seated one leg calf raise',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0765.gif',
		'name': 'smith seated shoulder press',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1426.gif',
		'name': 'smith seated wrist curl',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0766.gif',
		'name': 'smith shoulder press',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0767.gif',
		'name': 'smith shrug',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0768.gif',
		'name': 'smith single leg split squat',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0769.gif',
		'name': 'smith sprint lunge',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0770.gif',
		'name': 'smith squat',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0771.gif',
		'name': 'smith standing back wrist curl',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0772.gif',
		'name': 'smith standing behind head military press',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0773.gif',
		'name': 'smith standing leg calf raise',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0774.gif',
		'name': 'smith standing military press',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/3142.gif',
		'name': 'smith sumo squat',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1396.gif',
		'name': 'smith toe raise',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0775.gif',
		'name': 'smith upright row',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1308.gif',
		'name': 'smith wide grip bench press',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1309.gif',
		'name': 'smith wide grip decline bench press',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0776.gif',
		'name': 'snatch pull',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0777.gif',
		'name': 'spell caster',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1362.gif',
		'name': 'sphinx',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0778.gif',
		'name': 'spider crawl push up',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1363.gif',
		'name': 'spine stretch',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/2329.gif',
		'name': 'spine twist',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/2368.gif',
		'name': 'split squats',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0786.gif',
		'name': 'squat jerk',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1705.gif',
		'name': 'squat on bosu ball',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1685.gif',
		'name': 'squat to overhead reach',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1686.gif',
		'name': 'squat to overhead reach with twist',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/2297.gif',
		'name': 'stability ball crunch (full range hands behind head)',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/3291.gif',
		'name': 'stalder press',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/3669.gif',
		'name': 'standing archer',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0788.gif',
		'name': 'standing behind neck press',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1490.gif',
		'name': 'standing calf raise (on a staircase)',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1397.gif',
		'name': 'standing calves',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1398.gif',
		'name': 'standing calves calf stretch',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1599.gif',
		'name': 'standing hamstring and calf stretch with strap',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0794.gif',
		'name': 'standing lateral stretch',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1364.gif',
		'name': 'standing pelvic tilt',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0795.gif',
		'name': 'standing single leg curl',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0796.gif',
		'name': 'standing wheel rollerout',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/3223.gif',
		'name': 'star jump (male)',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/2138.gif',
		'name': 'stationary bike run v. 3',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0798.gif',
		'name': 'stationary bike walk',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/3314.gif',
		'name': 'straddle maltese',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/3298.gif',
		'name': 'straddle planche',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1427.gif',
		'name': 'straight leg outer hip abductor',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0803.gif',
		'name': 'superman push-up',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0805.gif',
		'name': 'suspended abdominal fallout',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0806.gif',
		'name': 'suspended push-up',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0807.gif',
		'name': 'suspended reverse crunch',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0808.gif',
		'name': 'suspended row',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0809.gif',
		'name': 'suspended split squat',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/3433.gif',
		'name': 'swimmer kicks v. 2 (male)',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/3318.gif',
		'name': 'swing 360',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1753.gif',
		'name': 'three bench dip',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/2459.gif',
		'name': 'tire flip',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0811.gif',
		'name': 'trap bar deadlift',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0814.gif',
		'name': 'triceps dip',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0812.gif',
		'name': 'triceps dip (bench leg)',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0813.gif',
		'name': 'triceps dip (between benches)',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0815.gif',
		'name': 'triceps dips floor',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0816.gif',
		'name': 'triceps press',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0817.gif',
		'name': 'triceps stretch',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0871.gif',
		'name': 'tuck crunch',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0818.gif',
		'name': 'twin handle parallel grip lat pulldown',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1466.gif',
		'name': 'twist hip lift',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/2802.gif',
		'name': 'twisted leg raise',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/2801.gif',
		'name': 'twisted leg raise (female)',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/3231.gif',
		'name': 'two toe touch (male)',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1365.gif',
		'name': 'upper back stretch',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1366.gif',
		'name': 'upward facing dog',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/3420.gif',
		'name': 'v-sit on floor',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0826.gif',
		'name': 'vertical leg raise (on parallel bars)',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/2141.gif',
		'name': 'walk elliptical cross trainer',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/3655.gif',
		'name': 'walking high knees lunge',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1460.gif',
		'name': 'walking lunge',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/3666.gif',
		'name': 'walking on incline treadmill',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/2311.gif',
		'name': 'walking on stepmill',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0830.gif',
		'name': 'weighted bench dip',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/2987.gif',
		'name': 'weighted close grip chin-up on dip cage',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/3643.gif',
		'name': 'weighted cossack squats (male)',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0832.gif',
		'name': 'weighted crunch',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/3670.gif',
		'name': 'weighted decline sit-up',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0833.gif',
		'name': 'weighted donkey calf raise',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1310.gif',
		'name': 'weighted drop push up',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/2135.gif',
		'name': 'weighted front plank',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0834.gif',
		'name': 'weighted front raise',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0866.gif',
		'name': 'weighted hanging leg-hip raise',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0835.gif',
		'name': 'weighted hyperextension (on stability ball)',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/3641.gif',
		'name': 'weighted kneeling step with swing',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/3644.gif',
		'name': 'weighted lunge with swing',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/3286.gif',
		'name': 'weighted muscle up',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/3312.gif',
		'name': 'weighted muscle up (on bar)',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/3290.gif',
		'name': 'weighted one hand pull up',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0840.gif',
		'name': 'weighted overhead crunch (on stability ball)',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0841.gif',
		'name': 'weighted pull-up',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0844.gif',
		'name': 'weighted round arm',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0846.gif',
		'name': 'weighted russian twist',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0845.gif',
		'name': 'weighted russian twist (legs up)',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/2371.gif',
		'name': 'weighted russian twist v. 2',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0847.gif',
		'name': 'weighted seated bicep curl  (on stability ball)',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0849.gif',
		'name': 'weighted seated twist (on stability ball)',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0850.gif',
		'name': 'weighted side bend (on stability ball)',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0851.gif',
		'name': 'weighted sissy squat',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0852.gif',
		'name': 'weighted squat',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0853.gif',
		'name': 'weighted standing curl',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0854.gif',
		'name': 'weighted standing hand squeeze',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/3313.gif',
		'name': 'weighted straight bar dip',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/3642.gif',
		'name': 'weighted stretch lunge',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0856.gif',
		'name': 'weighted svend press',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1754.gif',
		'name': 'weighted three bench dips',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1755.gif',
		'name': 'weighted tricep dips',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1767.gif',
		'name': 'weighted triceps dip on high parallel bars',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0857.gif',
		'name': 'wheel rollerout',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/3637.gif',
		'name': 'wheel run',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1429.gif',
		'name': 'wide grip pull-up',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1367.gif',
		'name': 'wide grip rear pull-up',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1311.gif',
		'name': 'wide hand push up',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/2363.gif',
		'name': 'wide-grip chest dip on high parallel bars',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0858.gif',
		'name': 'wind sprints',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1604.gif',
		'name': 'world greatest stretch',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/1428.gif',
		'name': 'wrist circles',
	},
	{
		'gifUrl': 'http://d205bpvrqc9yn1.cloudfront.net/0859.gif',
		'name': 'wrist rollerer',
	},
];

function showInputs( selectDropdown ) {
	const type = selectDropdown.value;
	const trackerInputs = selectDropdown.parentNode.nextSibling.nextSibling.children;

	switch ( type ) {
	case 'rep':
		trackerInputs[0].classList.remove( 'hide' );
		trackerInputs[2].classList.add( 'hide' );
		trackerInputs[3].classList.add( 'hide' );
		trackerInputs[1].classList.add( 'hide' );

		trackerInputs[0].required = true;
		trackerInputs[1].required = false;
		trackerInputs[2].required = false;
		trackerInputs[3].required = false;
		break;
	case 'weight':
		trackerInputs[0].classList.remove( 'hide' );
		trackerInputs[1].classList.remove( 'hide' );
		trackerInputs[2].classList.add( 'hide' );
		trackerInputs[3].classList.add( 'hide' );

		trackerInputs[0].required = true;
		trackerInputs[1].required = true;
		trackerInputs[2].required = false;
		trackerInputs[3].required = false;
		break;
	case 'time':
		trackerInputs[0].classList.add( 'hide' );
		trackerInputs[1].classList.add( 'hide' );
		trackerInputs[2].classList.remove( 'hide' );
		trackerInputs[3].classList.add( 'hide' );

		trackerInputs[0].required = false;
		trackerInputs[1].required = false;
		trackerInputs[2].required = true;
		trackerInputs[3].required = false;
		break;
	case 'distance':
		trackerInputs[0].classList.add( 'hide' );
		trackerInputs[1].classList.add( 'hide' );
		trackerInputs[2].classList.remove( 'hide' );
		trackerInputs[3].classList.remove( 'hide' );

		trackerInputs[0].required = false;
		trackerInputs[1].required = false;
		trackerInputs[2].required = true;
		trackerInputs[3].required = true;
	}
}
function addExerciseForm() {
	// Create a new form element
	const newForm = document.createElement( 'form' );
	newForm.className = 'container exercise flex-row-between flex-wrap';
	newForm.action = '';

	// Add the form fields to the new form element
	newForm.innerHTML = `
  <form autocomplete="off" action='/tracker' method='POST'>
    <div class="flex-row-between autocomplete">
      <input id="search-input" class="standard-input" type="text" name="title" placeholder="Name of Exercise" required>
      <select class="standard-input" name="type" onchange="showInputs(this)" required>
        <option value="" disabled selected>Select Type</option>
        <option value="rep">reps</option>
        <option value="weight">reps and kg</option>
        <option value="time">time</option>
        <option value="distance">time and km</option>
      </select>
    </div>
    <div class="flex-row-center tracker-inputs">
        <input name="rep" class="standard-input hide" type="number" min="0" placeholder="reps">
        <input name="weight" class="standard-input hide" type="number" min="0" placeholder="kg">
        <input name="time" class="standard-input hide" type="number" min="0" placeholder="min">
        <input name="distance" class="standard-input hide" type="number" min="0" placeholder="km">
        <button class="main-button" type="submit">✔</button>
    </div>
    <script type="text/javascript" src="/js/exercise-search.js"></script>
  </form>
  `;
	newForm.setAttribute( 'action', '/tracker' );
	newForm.setAttribute( 'method', 'POST' );
	// Append the new form element to the exercises-container div
	const exercisesContainer = document.getElementById( 'exercises-container' );
	exercisesContainer.appendChild( newForm );

	// NOTE: search with autocomplete feature
	function autocomplete( inp, arr ) {
		/* the autocomplete function takes two arguments,
		the text field element and an array of possible autocompleted values:*/
		let currentFocus;
		/* execute a function when someone writes in the text field:*/
		inp.addEventListener( 'input', function( e ) {
			let a; let b; let i; const val = this.value;
			/* close any already open lists of autocompleted values*/
			closeAllLists();
			if ( !val ) {
				return false;
			}
			currentFocus = -1;
			/* create a DIV element that will contain the items (values):*/
			a = document.createElement( 'DIV' );
			a.setAttribute( 'id', this.id + 'autocomplete-list' );
			a.setAttribute( 'class', 'autocomplete-items' );
			/* append the DIV element as a child of the autocomplete container:*/
			this.parentNode.appendChild( a );
			/* for each item in the array...*/
			for ( i = 0; i < arr.length; i++ ) {
				/* check if the item starts with the same letters as the text field value:*/
				if ( arr[i].name.toString().substr( 0, val.length ).toUpperCase() == val.toUpperCase() ) {
					/* create a DIV element for each matching element:*/
					b = document.createElement( 'DIV' );
					/* make the matching letters bold:*/
					b.innerHTML = '<strong>' + arr[i].name.substr( 0, val.length ) + '</strong>';
					b.innerHTML += arr[i].name.substr( val.length );
					/* insert a input field that will hold the current array item's value:*/
					b.innerHTML += '<input type=\'hidden\' value=\'' + arr[i].name + '\'>';
					/* execute a function when someone clicks on the item value (DIV element):*/
					b.addEventListener( 'click', function( e ) {
					/* insert the value for the autocomplete text field:*/
						inp.value = this.getElementsByTagName( 'input' )[0].value;
						/* close the list of autocompleted values,
					(or any other open lists of autocompleted values:*/
						closeAllLists();
					} );
					a.appendChild( b );
				}
			}
		} );
		/* execute a function presses a key on the keyboard:*/
		inp.addEventListener( 'keydown', function( e ) {
			let x = document.getElementById( this.id + 'autocomplete-list' );
			if ( x ) x = x.getElementsByTagName( 'div' );
			if ( e.keyCode == 40 ) {
				/* If the arrow DOWN key is pressed,
				increase the currentFocus variable:*/
				currentFocus++;
				/* and and make the current item more visible:*/
				addActive( x );
			} else if ( e.keyCode == 38 ) { // up
				/* If the arrow UP key is pressed,
				decrease the currentFocus variable:*/
				currentFocus--;
				/* and and make the current item more visible:*/
				addActive( x );
			} else if ( e.keyCode == 13 ) {
				/* If the ENTER key is pressed, prevent the form from being submitted,*/
				e.preventDefault();
				if ( currentFocus > -1 ) {
					/* and simulate a click on the "active" item:*/
					if ( x ) x[currentFocus].click();
				}
			}
		} );
		function addActive( x ) {
			/* a function to classify an item as "active":*/
			if ( !x ) return false;
			/* start by removing the "active" class on all items:*/
			removeActive( x );
			if ( currentFocus >= x.length ) currentFocus = 0;
			if ( currentFocus < 0 ) currentFocus = ( x.length - 1 );
			/* add class "autocomplete-active":*/
			x[currentFocus].classList.add( 'autocomplete-active' );
		}
		function removeActive( x ) {
			/* a function to remove the "active" class from all autocomplete items:*/
			for ( let i = 0; i < x.length; i++ ) {
				x[i].classList.remove( 'autocomplete-active' );
			}
		}
		function closeAllLists( elmnt ) {
			/* close all autocomplete lists in the document,
			except the one passed as an argument:*/
			const x = document.getElementsByClassName( 'autocomplete-items' );
			for ( let i = 0; i < x.length; i++ ) {
				if ( elmnt != x[i] && elmnt != inp ) {
					x[i].parentNode.removeChild( x[i] );
				}
			}
		}
		/* execute a function when someone clicks in the document:*/
		document.addEventListener( 'click', function( e ) {
			closeAllLists( e.target );
		} );
	}
	autocomplete( document.getElementById( 'search-input' ), exList );
}
